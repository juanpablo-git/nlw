import {getCustomRepository} from "typeorm"
import {TagsRepositores} from "../repositores/TagsRepositores"
class CreateTagService {
    async execute(name:string){
        const tagsRepositories = getCustomRepository(TagsRepositores)
        if(!name){
            throw new Error("incorrect name")
        }

        const tagAlreadExists =await tagsRepositories.findOne({
            name
        })
        
    if(tagAlreadExists) {
        throw new Error("tag alreadi exists")
    }

    const tag =  tagsRepositories.create({
        name
    })
    await tagsRepositories.save(tag)

    return tag ;
    }

}

export {
    CreateTagService
}