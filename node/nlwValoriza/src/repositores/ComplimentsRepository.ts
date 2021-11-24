import {Repository,EntityRepository} from "typeorm"
import { Compliments } from "../entities/compliments"

@EntityRepository(Compliments)
class ComplimentsRepository extends Repository<Compliments>{
    
}

export {ComplimentsRepository}
