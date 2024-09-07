import "reflect-metadata"
import { createConnection, Connection } from "typeorm"
import {Student} from "./lib/entities/Student"

var _connection: Connection

export async function connect(databaseFN: string) {
  _connection = await createConnection({
    type: "sqlite",

  })
}

export {Student} from "./lib/entities/Student"

