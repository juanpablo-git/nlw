import { Request,Response,NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositores/UserRepositores";
export async function EnsureAdmin(request:Request,response:Response,next:NextFunction){
    
    const{user_id} =request
    const usersRepositores = getCustomRepository(UsersRepositories)
   const {admin} = await usersRepositores.findOne(user_id)
    if (admin) {
        return next()
    }

    return response.status(401).json({
        error:"Unautorized"
    })
}
