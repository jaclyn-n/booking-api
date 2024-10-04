import { booking } from "../models/booking-model.js";

export const getAllBookings = (req, res) => {
  res.status(200).json("these are all bookings");
};
export const getOneBooking = (req, res) => {
  res.status(200).json("this is one booking");
};
export const postAllBooking = async (req, res) => {
  const newBooking = await new booking(req.body);



  const bookings = await newBooking.save();

  res.status(201).json(bookings);
};

export const updateBooking = (req, res) => {
  res.status(200).json("updated a booking");
};

export const deleteABooking = (req, res) => {
  res.status(200).json("deleted a booking");
};
