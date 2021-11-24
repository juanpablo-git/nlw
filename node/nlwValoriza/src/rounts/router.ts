import { Router } from "express";
import { CreateUserConttroler } from "../controllers/CreateUserConttroler"
import { CreateTagController } from "../controllers/CreateTagController";
import { EnsureAdmin } from "../controllers/midwers/ensureAdmin";
import { AutenticateUserController  } from "../controllers/autenticateUserController";
import { CreateCoplimentController } from "../controllers/createComplimentController";

const router = Router()
const autenticateUserController = new AutenticateUserController()
const createUserConttroler = new CreateUserConttroler();
const createTagController = new CreateTagController()
const createComplimentController = new CreateCoplimentController()

router.post("/users",createUserConttroler.handle)

router.post("/tags",EnsureAdmin,createTagController.handle)

router.post("/session",autenticateUserController.handle)

router.post("/compliments",createComplimentController.handle)

export {router}