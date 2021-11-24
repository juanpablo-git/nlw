import { ComplimentsRepository } from "../repositores/ComplimentsRepository"
import {getCustomRepository} from "typeorm"
import { UsersRepositories } from "../repositores/UserRepositores"

interface IComplimentsRequest{
    tag_id:string,
    user_sender:string,
    user_reserver:string,
    mensage:string
}

class CreateComplimentsService {
    async execulte({tag_id,user_sender,user_reserver,mensage}:IComplimentsRequest){
        const complementRepositores = getCustomRepository(ComplimentsRepository)
        const userRepositores = getCustomRepository(UsersRepositories)

        if(user_sender == user_reserver){
            throw new Error("User Reciver does not exist")
        }

        const userReciverExists = await userRepositores.findOne(user_reserver)
        if(!userReciverExists){
            throw new Error("User reciver does not exists")
        }
        const compliment = complementRepositores.create({
            tag_id,
            user_reserver,
            user_sender,
            mensage
        })

        await complementRepositores.save(compliment)
        return compliment
      

    }
}
export{CreateComplimentsService}