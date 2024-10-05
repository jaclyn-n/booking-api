import express from 'express'
import mongoose from 'mongoose';
import 'dotenv/config'
import { bookingRouter } from './routes/all-routes.js';
import cors from 'cors'



// connect to database
await mongoose.connect(process.env.MONGO_URI)

const app = express();

const PORT =process.env.PORT || 7079

app.use(express.json ())
app.use(bookingRouter)
app.use(cors)

app.listen( PORT, () => {
   console.log(`server is listening on ${PORT}`)
})