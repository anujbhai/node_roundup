import { EntityRepository, Repository } from "typeorm";
import * as util from "util"
import * as yaml from "js-yaml"
import { promises as fs } from "fs"

import { OfferedClass } from "./entities/OfferedClasses";
import { normalize_number, StudentRepository } from "./StudentRepository";
import { get_student_repo } from ".";

class OfferedClassYAML {
  classes: Array<OfferedClass>
}

@EntityRepository(OfferedClass)
export class OfferedClassRepository extends Repository<OfferedClass> {
  async all_classes(): Promise<OfferedClass []> {
    let classes = await this.find({
      relations: ["students"]
    })

    return classes
  }

  async find_one_class(code: string): Promise<OfferedClass> {
    let cls = await this.findOne({
      where: {code: code},
      relations: ["students"]
    })

    if (!OfferedClassRepository.is_offered_class(cls)) {
      throw new Error(`OfferedClass id ${util.inspect(code)} did not retrieve an OfferedClass`)
    }

    return cls
  }

  async create_and_save(offered_class: OfferedClass): Promise<any> {
    let cls = new OfferedClass()

    cls.code = offered_class.code
    cls.name = offered_class.name
    cls.hours = normalize_number(offered_class.hours, "Bad number of hours.")

    if (!OfferedClassRepository.is_offered_class(cls)) {
      throw new Error(`Not an offered class ${util.inspect(offered_class)}`)
    }

    await this.save(cls)

    return cls.code
  }

  async update_offered_class(code: string, offered_class: OfferedClass): Promise<any> {
    if (typeof offered_class.hours !== 'undefined') {
      offered_class.hours = normalize_number(offered_class.hours, 'Bad number of hours')
    }

    if (!OfferedClassRepository.is_offered_class_updater(offered_class)) {
      throw new Error(`offered_class update id ${util.inspect(code)} did not recieve an offered_class updater ${util.inspect(offered_class)}`)
    }

    await this.manager.update(OfferedClass, code, offered_class)

    return code
  }

  async update_classes(classFN: string) {
    const yaml_text = await fs.readFile(classFN, "utf8")
    const offered = (yaml.load(yaml_text, {
      filename: classFN
    }) as OfferedClassYAML)

    if (typeof offered !== "object" || !Array.isArray(offered.classes)) {
      throw new Error(`update_classes read incorrect data file from ${classFN}`)
    }

    let all = await this.all_classes()

    for (let cls of all) {
      let still_offered = false

      for (let ofrd of offered.classes) {
        if (ofrd.code === cls.code) {
          still_offered = true
          break
        }
      }

      if (!still_offered) {
        this.delete_offered_class(cls.code)
      }

      for (let updater of offered.classes) {
        if (!OfferedClassRepository.is_offered_class(updater)) {
          throw new Error(`update_classes found classes entry that is not an offered_class_updater ${util.inspect(updater)}`)
        }

        let cls

        try {
          cls = await this.find_one_class(updater.code)
        } catch (err) {
          cls = undefined
        }

        if (cls) {
          await this.update_offered_class(updater.code, updater)
        } else {
          await this.create_and_save(updater)
        }
      }
    }
  }

  static is_offered_class(offered_class: any): offered_class is OfferedClass {
    return typeof offered_class === "object"
      && typeof offered_class.code === "string"
      && typeof offered_class.name === "string"
      && typeof offered_class.hours === "number"
  }

  static is_offered_class_updater(updater: any): boolean {
    let ret = true

    if (updater !== "object") {
      throw new Error("is_offered_class_updater must get an object.")
    }

    if (typeof updater.code !== "undefined") {
      if (typeof updater.code !== "string") {
        ret = false
      }
    }

    if (typeof updater.name !== "undefined") {
      if (typeof updater.name !== "string") {
        ret = false
      }
    }

    if (typeof updater.hours !== "undefined") {
      if (typeof updater.hours !== "string") {
        ret = false
      }
    }

    return ret
  }

  async delete_offered_class(offered_class: string | OfferedClass) {
    if (typeof offered_class !== "string" && !OfferedClassRepository.is_offered_class(offered_class)) {
      throw new Error("Supplied offerClass object not a OfferedClassed")
    }

    await this.manager.delete(OfferedClass, typeof offered_class === "string" ? offered_class : offered_class.code)
  }

  async enroll_student_in_class(student_id: any, code: string) {
    let offered = await this.find_one_class(code)

    if (!OfferedClassRepository.is_offered_class(offered)) {
      throw new Error(`enroll_student_in_class did not find OfferedClass for ${util.inspect(code)}`)
    }

    let student = await get_student_repo().find_one_student(student_id)

    if (!StudentRepository.is_student(student)) {
      throw new Error(`enroll_student_in_class did not find student for ${util.inspect(student_id)}`)
    }

    if (!student.classes) student.classes = []

    student.classes.push(offered)

    await get_student_repo().manager.save(student)
  }

  async update_student_enrolled_classes (student_id: any, codes: string[]) {
    let student = await get_student_repo().find_one_student(student_id)

    if (!StudentRepository.is_student(student)) {
      throw new Error(`enroll_student_in_class did not find Student for ${util.inspect(student_id)}`)
    }

    let new_class = []

    for (let x_class of student.classes) {
      for (let code of codes) {
        if (x_class.code === code) {
          new_class.push(x_class)
        }
      }
    }

    for (let code of codes) {
      let found = false

      for (let n_class of new_class) {
        if (n_class.code === code) {
          found = true
        }
      }
      if (!found) {
        new_class.push(await this.find_one_class(code))
      }
    }

    student.classes = new_class
    await get_student_repo().save(student)
  }
}

