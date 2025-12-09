import { pgTable, unique, integer, varchar, foreignKey, text, json } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

export const users = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity({ 
    name: "users_id_seq", 
    startWith: 1, 
    increment: 1, 
    minValue: 1, 
    maxValue: 2147483647, 
    cache: 1 
  }),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull(),
  creadits: integer(),
}, (table) => [
  unique("users_email_unique").on(table.email),
]);

// Update the sessionChatTable schema to include selectedDoctor
export const sessionChatTable = pgTable("sessionChatTable", {
  id: integer().primaryKey().generatedAlwaysAsIdentity({ 
    name: "sessionChatTable_id_seq", 
    startWith: 1, 
    increment: 1, 
    minValue: 1, 
    maxValue: 2147483647 
  }),
  sessionId: varchar({ length: 255 }).notNull(),
  notes: text(),
  selectedDoctor: json(), // Add this field to store the doctor information
  conversation: json(),
  report: json(),
  createdBy: varchar(),
  createdAt: varchar({ length: 255 }).notNull(),
}, (table) => [
  foreignKey({
    columns: [table.createdBy],
    foreignColumns: [users.email],
    name: "sessionChatTable_createdBy_users_email_fk"
  }),
  unique("sessionChatTable_sessionId_unique").on(table.sessionId),
]);