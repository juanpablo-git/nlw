import { EntityRepository,Repository } from "typeorm";
import { Tag } from "../entities/tag";

@EntityRepository(Tag)
class TagsRepositores extends Repository<Tag>{

}

export {
    TagsRepositores
}