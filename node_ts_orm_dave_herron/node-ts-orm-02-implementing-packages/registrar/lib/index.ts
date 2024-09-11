import "reflect-metadata"
import { createConnection, Connection } from "typeorm"
import {Student} from "./entities/Student"
export {Student} from "./entities/Student"
import { StudentRepository } from "./StudentRepository"
export { StudentRepository } from "./StudentRepository"

var _connection: Connection

export async function connect(databaseFN: string) {
  _connection = await createConnection({
    type: "sqlite",
    database: databaseFN,
    synchronize: true,
    logging: false,
    entities: [
      Student
    ]
  })
}

export function connected() {
  return typeof _connection !== "undefined"
}

export function get_student_repo(): StudentRepository {
  return _connection.getCustomRepository(StudentRepository)
}

