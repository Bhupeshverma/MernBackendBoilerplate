import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js'
import cookieParser from 'cookie-parser';
import cors from "cors";

const PORT = 4000

const app = express()

dotenv.config()



// Mongodb connection
const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log(`Connected to the server`);
    } catch (error) {
        handleError(error)
    }
}

// middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json())


app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/users', userRoutes)


app.use((err,req,res,next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || 'Something went wrong'
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

// Starting express server
app.listen(PORT, () => {
    connect();
    `Connected to server`
})


