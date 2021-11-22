import express,{Request,Response,NextFunction, response} from 'express'
import "express-async-errors"
import "reflect-metadata";
import "./database";
import { router } from './rounts/router';


const app = express()
app.use(express.json())
app.use(router)
app.use((err:Error,req:Request,res:Response,next:NextFunction)=>{
    if(err instanceof Error) {
        return res.status(400).json({
            error:err.message
            
        })
    }

    return response.status(500).json({
        status:"error",
        mensage:"Internal error"
    })

})
app.listen(3000,()=>console.log("Server runing"))
