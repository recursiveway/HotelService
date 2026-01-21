import {db} from "../db";
import { hotelsTable, type Hotel } from "../db/schema";
import { createHotelDTO } from "../dto/hotel.dto";
import { eq } from "drizzle-orm";
import { NotFoundError } from "../utils/errors/app.error";

export async function createHotel(hotelData: createHotelDTO): Promise<Hotel> {
  const [result] = await db
    .insert(hotelsTable)
    .values({
      name: hotelData.name,
      address: hotelData.address,
      location: hotelData.location,
    })
    .$returningId();

    const [newHotel] = await db
    .select()
    .from(hotelsTable)
    .where(eq(hotelsTable.id, result.id));


  return newHotel;
}


export async function getHotelById(hotelId: number):Promise<Hotel | null> {
    const hotels = await db
    .select()
    .from(hotelsTable)
    .where(eq(hotelsTable.id, hotelId))

    const hotel = hotels[0];

    if(!hotel) {
        throw new NotFoundError(`Hotel with id ${hotelId} not found`);
    }

    return hotel

}