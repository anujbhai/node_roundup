import "reflect-metadata"
import { DataSource } from "typeorm"
import {Student} from "./entities/Student"
export {Student} from "./entities/Student"
// import { OfferedClass } from "./entities/OfferedClasses"
export {OfferedClass} from "./entities/OfferedClasses"
import { StudentRepository } from "./StudentRepository"
export { StudentRepository } from "./StudentRepository"

export let _dataSrc: DataSource

export async function connect(databaseFN: string) {
  _dataSrc = new DataSource({
    type: "sqlite",
    database: databaseFN,
    synchronize: true,
    logging: false,
    entities: [
      Student,
      // OfferedClass
    ]
  })

  try {
    await _dataSrc.initialize()
    console.log("database connected!")
  }  catch (err) {
    console.log("Error connecting to db", err)
    throw err
  }
}

export function connected(): boolean {
  return _dataSrc && _dataSrc.isInitialized
}

export function get_student_repo(): StudentRepository {
  if (!_dataSrc) throw new Error("DataSource is not initialized!")
  return _dataSrc.getRepository(Student) as unknown as StudentRepository
}

