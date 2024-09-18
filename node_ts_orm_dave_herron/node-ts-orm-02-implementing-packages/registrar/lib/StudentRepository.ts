import { EntityRepository, Repository } from "typeorm"
import * as util from "util"
import { Student } from "./entities/Student"

export type GenderType = "male" | "female" | "prefer not to disclose" | "other"

export enum Gender {
  male = "male",
  female = "female",
  undisclose = "prefer not to disclose",
  other = "other"
}

export function normalize_number(num: number | string, error_if_not_number: string): number {
  if (typeof num === "undefined") {
    throw new Error(`${error_if_not_number} -- ${num}`)
  }

  if (typeof num === "number") return num

  let ret = parseInt(num)

  if (isNaN(ret)) {
    throw new Error(`${error_if_not_number} ${ret} -- ${num}`)
  }

  return ret!
}

@EntityRepository(Student)
export class StudentRepository extends Repository<Student> {
  static is_student(student: any): student is Student {
    return typeof student === "object"
      && typeof student.name === "string"
      && typeof student.entered === "number"
      && typeof student.grade === "number"
      && StudentRepository.is_gender(student.gender)
  }

  static is_student_updater(updater: any): boolean {
    let ret = true

    if (typeof updater !== "object") {
      throw new Error("is_student_updater must get object")
    }

    if (typeof updater.name !== "undefined") {
      if (typeof updater.name !== "string") ret = false
    }

    if (typeof updater.entered !== "undefined") {
      if (typeof updater.entered !== "number") ret = false
    }

    if (typeof updater.grade !== "undefined") {
      if (typeof updater.grade !== "number") ret = false
    }

    if (typeof updater.gender !== "undefined") {
      if (!StudentRepository.is_gender(updater.gender)) ret = false
    }

    return ret
  }

  static is_gender(gender: any): gender is Gender {
    return typeof gender === "string"
      && (gender === "male" || gender === "female" || gender === "prefer not to disclose" || gender === "other")
  }

  // Creating a student entity
  async create_and_save(student: Student) {
    let stud = new Student()

    stud.name = student.name
    stud.entered = normalize_number(student.entered, "Bad year entered")
    stud.grade = normalize_number(student.grade, "Bad grade")
    stud.gender = student.gender

    await this.save(stud)

    return stud.id
  }
  
  // Reading student entity
  async all_students(): Promise<Student []> {
    let students = await this.find()

    return students
  }

  async find_one_student(id: number): Promise<Student> {
    let student = await this.findOne({
      where: {id: id}
    })

    if (!StudentRepository.is_student(student)) {
      throw new Error(`Student id ${util.inspect(id)} did not retrieve a Student.`)
    }

    return student
  }

  // Updating student entity
  async update_student(id: number, student: Student): Promise<number> {
    if (typeof student.entered !== 'undefined') {
      student.entered = normalize_number(student.entered, "Bad year entered.")
    }
    if (typeof student.grade !== "undefined") {
      student.grade = normalize_number(student.grade, "Bad grade.")
    }
    if (!StudentRepository.is_student_updater(student)) {
      throw new Error(`Student update id ${util.inspect(id)} did not receive a Student updater ${util.inspect(student)}`)
    }

    await this.manager.update(Student, id, student)

    return id
  }

  // Deleting student entity
  async delete_student(student: number | Student) {
    if (typeof student !== "number" && !StudentRepository.isStudent(student)) {
      throw new Error("Supplied student object is not a Student")
    }

    await this.manager.delete(Student, typeof student === "number" ? student : student.id)
  }
}

