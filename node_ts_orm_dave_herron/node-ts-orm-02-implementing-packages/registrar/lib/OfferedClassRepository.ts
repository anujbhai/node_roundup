import { EntityRepository, Repository } from "typeorm";
import * as util from "util"
import * as yaml from "js-yaml"
import { promises as fs } from "fs"

import { OfferedClass } from "./entities/OfferedClasses";

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
          throw new Error(``)
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

  async delete_offered_class(offered_class: string | OfferedClass) {
    if (typeof offered_class !== "string" && !OfferedClassRepository.is_offered_class(offered_class)) {
      throw new Error("Supplied offerClass object not a OfferedClassed")
    }

    await this.manager.delete(OfferedClass, typeof offered_class === "string" ? offered_class : offered_class.code)
  }
}

