import { integer, json, pgTable, text, varchar } from "drizzle-orm/pg-core";
import { Message } from "openai/resources/conversations/conversations.mjs";
// import { json } from "stream/consumers";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  creadits:integer()
});


export const SessionChatTable = pgTable("sessionChatTable", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  sessionId: varchar({ length: 255 }).notNull().unique(),
  notes:text(),
  selectedDoctor:json(),
  conversation:json(),
  report:json(),
 createdBy:varchar().references(()=>usersTable.email),
 createdAt: varchar({ length: 255 }).notNull(),
});