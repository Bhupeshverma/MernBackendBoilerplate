import Users from "../models/users.js"




export const getUser = async (req,res,next) => {
    try {
        const user = await Users.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}


export const getUsers = async(req,res,next) => {
    try {
        const users = await Users.find()
        res.status(200).json(users)
    } catch (error) {
        next(error)
    }
}