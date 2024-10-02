
export const getAllBookings = (req, res) => {
    res.status(200).json('these are all bookings')

}
export const getOneBooking = (req, res) => {
    res.status(200).json('this is one booking')
}
export const postAllBooking = (req, res) => {
    res.status(200).json('post all booking' )
}

export const updateBooking = (req, res) => {
    res.status(200).json('updated a booking')
}

export const deleteABooking = (req, res) => {
    res.status(200).json('deleted a booking')
}