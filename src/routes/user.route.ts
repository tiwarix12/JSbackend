import { Router } from "express";
import { upload } from "../middlewares/multer.middleware";
import {register} from "../controllers/user.controller"
const router = Router();

router.route("/register").post(upload.fields([
    {name: 'avatar', maxCount: 1},
    {name: 'cover', maxCount: 1}

]),registerUser)