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
  // Updating student entity
  // Deleting student entity
}

