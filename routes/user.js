import express from 'express'
import { getUser, getUsers } from '../controllers/user.js'
import { verifyUser, verifyAdmin } from '../utils/verify.js'


const router = express.Router()


//GET
router.get("/:id", verifyUser, getUser);

//GET ALL
router.get("/", verifyAdmin, getUsers);


export default router