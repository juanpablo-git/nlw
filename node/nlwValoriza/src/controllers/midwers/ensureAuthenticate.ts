import {Request,Response,NextFunction} from "express"
import {verify} from "jsonwebtoken"

interface Ipaiload {
    sub:string
}

export function EnsureAuthenticate (request:Request,
    response:Response,
    next:NextFunction){

    const authToken = request.headers.authorization
    
    if(!authToken){
        return response.status(401).end()
    }

    const [,token] = authToken.split(" ")
try{
    const {sub} = verify(
        token,
        "12345") as Ipaiload
   request.user_id = sub
    return next()
}catch(err){
    return response.status(401).end()
}
 

}