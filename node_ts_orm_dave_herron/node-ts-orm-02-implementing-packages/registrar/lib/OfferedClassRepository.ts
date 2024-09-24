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
    }
  }
}

