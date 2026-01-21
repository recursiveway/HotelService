import { int, mysqlTable, timestamp, float, varchar } from "drizzle-orm/mysql-core";
import { type InferSelectModel, type InferInsertModel } from 'drizzle-orm';

export const hotelsTable = mysqlTable("hotels", { 
  id: int().primaryKey().autoincrement().notNull(),
  name: varchar({ length: 255 }).notNull(),
  address: varchar({ length: 255 }).notNull(),
  location: varchar({ length: 255 }).notNull(),
  rating: float().default(0).notNull(), 
  ratingCount: int("rating_count"),   
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
  deletedAt: timestamp("deleted_at"),
});

export type Hotel = InferSelectModel<typeof hotelsTable>;
export type NewHotel = InferInsertModel<typeof hotelsTable>;