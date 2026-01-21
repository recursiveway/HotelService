import { Hono } from "hono";
import { createHotelHandler, getHotelByIdHandler } from "../../controllers/hotel.controller";
import { getHotelById } from "../../repositories/hotel.repository";

const hotelRouter = new Hono();

hotelRouter.post("/", createHotelHandler);
hotelRouter.get("/:id", getHotelByIdHandler);

export default hotelRouter;