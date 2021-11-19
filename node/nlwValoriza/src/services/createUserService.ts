import { UsersRepositores } from "../repositores/UserRepositores"

interface IUserRequest{
    name:string,
    email:string,
    admin?:boolean
}
class createUserService{

    async execute({name,email,admin}:IUserRequest){
        const UsersRepository = new UsersRepositores()
        
    }

}
export {createUserService}