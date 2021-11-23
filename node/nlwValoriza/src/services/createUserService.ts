import {getCustomRepository} from "typeorm"
import {UsersRepositories} from "../repositores/UserRepositores"
import {hash} from "bcryptjs"
interface IUserRequest{
    name:string,
    email:string,
    admin?:boolean,
    password:string
}
class createUserService{

    async execute({name,email,admin,password}:IUserRequest){
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
        const passwordHash = await hash(password,8)
        const user = UsersRepository.create({
            name,
            email,
            admin,
            password: passwordHash
        }) 

        await UsersRepository.save(user)

        return user;
    }

}
export {createUserService}