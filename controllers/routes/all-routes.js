import { Router } from 'express'
import { deleteABooking, getAllBookings, getOneBooking, postAllBooking, updateBooking} from '../booking-controller.js'

export const bookingRouter = Router()

bookingRouter.get('/bookings', getAllBookings)

bookingRouter.get('/bookings/:id', getOneBooking)

bookingRouter.post('/booking', postAllBooking)

bookingRouter.patch('/booking/:id', updateBooking)

bookingRouter.delete('/booking/:id', deleteABooking)