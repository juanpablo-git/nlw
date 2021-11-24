import { Router } from "express";
import { CreateUserConttroler } from "../controllers/CreateUserConttroler"
import { CreateTagController } from "../controllers/CreateTagController";
import { EnsureAdmin } from "../controllers/midwers/ensureAdmin";
import { AutenticateUserController  } from "../controllers/autenticateUserController";
import { CreateCoplimentController } from "../controllers/createComplimentController";
import { EnsureAuthenticate } from "../controllers/midwers/ensureAuthenticate";

const router = Router()
const autenticateUserController = new AutenticateUserController()
const createUserConttroler = new CreateUserConttroler();
const createTagController = new CreateTagController()
const createComplimentController = new CreateCoplimentController()


router.post("/users",createUserConttroler.handle)

router.post("/tags",EnsureAuthenticate,EnsureAdmin,createTagController.handle)

router.post("/session",autenticateUserController.handle)

router.post("/compliments",EnsureAuthenticate,createComplimentController.handle)

export {router}