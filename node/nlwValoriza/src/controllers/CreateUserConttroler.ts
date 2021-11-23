import {Request,Response} from "express"
import {  createUserService } from "../services/createUserService"
class CreateUserConttroler {
    async handle(request:Request,response:Response){
        const {name,email,admin,password} = request.body
        const CreateUserService = new createUserService();
        const user = await CreateUserService.execute({name,email,admin,password});
        return response.json(user)
    }
}
export { CreateUserConttroler }