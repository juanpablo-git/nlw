import {getCustomRepository} from "typeorm"
import { ComplimentsRepository } from "../repositores/ComplimentsRepository"

class ListUseSendService{
    async execute(user_id:string){
        const complimentsRepositores = getCustomRepository(ComplimentsRepository)
        const compliments = await complimentsRepositores.find({
            where:{
                user_resender: user_id
            }
        })
        return compliments
    }

}
export {ListUseSendService}