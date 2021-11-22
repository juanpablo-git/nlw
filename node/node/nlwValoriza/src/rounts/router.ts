import { Router } from "express";
import { CreateUserConttroler } from "../controllers/CreateUserConttroler"

const router = Router()

const createUserConttroler = new CreateUserConttroler();


router.post("/users",createUserConttroler.handle)

export {router}