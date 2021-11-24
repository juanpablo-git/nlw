import { getCustomRepository } from "typeorm"
import { ComplimentsRepository } from "../repositores/ComplimentsRepository"

interface UIcomplimentsRequest{
    tag_id:string,
    user_sender:string,
    user_reciver:string,
    menssage:string
}
class CreateComplementsServices {
    async execute({tag_id,user_sender,user_reciver,menssage}:UIcomplimentsRequest){
        const complimentsRepositortes = getCustomRepository(ComplimentsRepository)
        

    }
}
export { CreateComplementsServices }