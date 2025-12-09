import { relations } from "drizzle-orm/relations";
import { users, sessionChatTable } from "./schema";

export const sessionChatTableRelations = relations(sessionChatTable, ({one}) => ({
	user: one(users, {
		fields: [sessionChatTable.createdBy],
		references: [users.email]
	}),
}));

export const usersRelations = relations(users, ({many}) => ({
	sessionChatTables: many(sessionChatTable),
}));