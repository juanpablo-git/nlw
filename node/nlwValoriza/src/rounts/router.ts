import { Router } from "express";
import { CreateUserConttroler } from "../controllers/CreateUserConttroler"
import { CreateTagController } from "../controllers/CreateTagController";
import { EnsureAdmin } from "../controllers/midwers/ensureAdmin";
const router = Router()

const createUserConttroler = new CreateUserConttroler();
const createTagController = new CreateTagController()


router.post("/users",createUserConttroler.handle)

router.post("/tags",EnsureAdmin,createTagController.handle)

export {router}