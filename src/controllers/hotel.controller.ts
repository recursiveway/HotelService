import { Context } from "hono"; // Import Context from Hono
import { createHotelService, getHotelByIdService } from "../services/hotel.service";

export async function createHotelHandler(c: Context) {
    try {
        const body = await c.req.json(); 

        const response = await createHotelService(body);

        return c.json({
            message: "Hotel created successfully",
            data: response,
            success: true
        }, 201); 
    } catch (error: any) {
       
        const status = error.statusCode || 500;
        const message = error.message || "Internal Server Error";

        return c.json({
            success: false,
            message: message
        }, status);
    }
}


export async function getHotelByIdHandler(c: Context) {
    try {
        const hotelId = Number(c.req.param("id"));

        const hotel = await getHotelByIdService(hotelId);

        if (!hotel) {
            return c.json({
                message: "Hotel not found",
                success: false
            }, 404);
        }

        return c.json({
            message: "Hotel retrieved successfully",
            data: hotel,
            success: true
        }, 200);
    } catch (error: any) {
       
        const status = error.statusCode || 500;
        const message = error.message || "Internal Server Error";

        return c.json({
            success: false,
            message: message
        }, status);
    }
}