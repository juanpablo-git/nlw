import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositores/UserRepositores"
import {compare} from "bcryptjs"
import {sign} from "jsonwebtoken"

interface IUautenticateRequest{
    email:string,
    password:string
}
class AutenticateUserService {
    async execute({email,password}:IUautenticateRequest){
        const userRepositores = getCustomRepository(UsersRepositories)

        const user = await userRepositores.findOne({
            email
        })
        if(!user){
            throw new Error("Email/password incorrect")
        }
        const passworMath = compare(password,user.password)

        if(!passworMath){
            throw new Error("Email/password incorrect")

        }
        const token = sign(
            {
                email:user.email
            },"12345",{subject: user.id, 
                    expiresIn:"1d"
            }
        )

        return token
        
    }
}

export{
    AutenticateUserService
}