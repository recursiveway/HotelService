import { Hono } from "hono";
import { createHotelHandler, getHotelByIdHandler } from "../../controllers/hotel.controller";
import { zValidator } from "@hono/zod-validator";
import { hotelSchema } from "../../validators/hotel.validator";

const hotelRouter = new Hono();

hotelRouter.post("/", zValidator("json",hotelSchema), createHotelHandler);
hotelRouter.get("/:id", getHotelByIdHandler);

export default hotelRouter;