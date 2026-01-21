import { createHotelDTO } from "../dto/hotel.dto";
import { createHotel,getHotelById } from "../repositories/hotel.repository";
import { BadRequestError } from "../utils/errors/app.error";

const blocklist = ["badhotel", "spamhotel"];

const isHotelAddressValid = (address: string): boolean => {
    // Simple validation: address should not be empty and should not contain blocked words
    if (!address ||  blocklist.includes(address.toLowerCase())) {
        return false;
    }
    return true;
}

export async function createHotelService(params:createHotelDTO) {
    const hotel = createHotel(params);
    return hotel;
    
}

export async function getHotelByIdService(hotelId: number) {

    if (isNaN(hotelId) || hotelId <= 0) {
        throw new BadRequestError("Invalid hotel ID");
    }

    const hotel = await getHotelById(hotelId);
    return hotel;
}