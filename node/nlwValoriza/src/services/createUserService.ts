import {getCustomRepository} from "typeorm"
import {UsersRepositories} from "../repositores/UserRepositores"
interface IUserRequest{
    name:string,
    email:string,
    admin?:boolean
}
class createUserService{

    async execute({name,email,admin}:IUserRequest){
        const UsersRepository = getCustomRepository(UsersRepositories)
        console.log("Email",email)
        if (!email){
            throw new Error("Email incorrect")
        }
        const UsersAlreadExists = await UsersRepository.findOne({
            email
        })
        if(UsersAlreadExists){
            throw new Error("User alredy exists")
        }

        const user = UsersRepository.create({
            name,
            email,
            admin
        }) 

        await UsersRepository.save(user)

        return user;
    }

}
export {createUserService}