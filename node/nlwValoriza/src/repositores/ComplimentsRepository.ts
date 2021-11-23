import {Repository,EntityRepository} from "typeorm"
import { Compliments } from "../entities/compliments"
import { User } from "../entities/User"
@EntityRepository(User)
class ComplimentsRepository extends Repository<Compliments>{

}

export {ComplimentsRepository}
