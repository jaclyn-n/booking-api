import express from 'express'
import { bookingRouter } from './controllers/routes/all-routes.js';

const app = express();

const PORT =7079
app.use(bookingRouter)

app.listen( PORT, () => {
   console.log('server is listening on ${PORT}')
})