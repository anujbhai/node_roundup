import { EntityRepository, Repository } from "typeorm";
import { OfferedClass } from "./entities/OfferedClasses";

@EntityRepository(OfferedClass)
export class OfferedClassRepository extends Repository<OfferedClass> {}

