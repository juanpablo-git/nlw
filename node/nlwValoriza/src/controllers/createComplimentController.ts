import {Request,Response} from "express"
import { CreateComplimentsService } from "../services/createComplimentsServices"
class CreateCoplimentController {
async   handle(request:Request,response:Response){
    const  { tag_id,
        user_reserver,
        mensage} = request.body
    const {user_id} = request
    const createCompluimentService = new CreateComplimentsService()

   const compliment = await createCompluimentService.execulte({
        tag_id,
        user_reserver,
        user_sender:user_id,
        mensage
    })
    return response.json(compliment)
}
}
export {CreateCoplimentController}