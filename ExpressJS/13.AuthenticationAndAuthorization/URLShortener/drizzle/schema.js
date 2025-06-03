import { relations } from 'drizzle-orm';
import { int, mysqlTable, varchar, timestamp } from 'drizzle-orm/mysql-core';

export const shortenerTable = mysqlTable('shortener', {
  id: int().autoincrement().primaryKey(),
  url: varchar({ length: 512 }).notNull(),
  shortCode: varchar({ length: 255 }).notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(), 
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(), 
  userId : int("user_id").notNull().references(() => usersTable.id),
});

export const usersTable = mysqlTable("users", { 
  id: int().autoincrement().primaryKey(), 
  name : varchar({ length: 255}).notNull(), 
  email: varchar({ length: 255 }).notNull().unique(), 
  password: varchar({ length: 255}).notNull(), 
  createdAt: timestamp("created_at").defaultNow().notNull(), 
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(), 
});


//!Define relation between both tables if working with drizzle
//?A user can create multiple shortLinks
export const userRelation = relations(usersTable, ({many}) => ({
  shortLink : many(shortenerTable)
}))

//?A shortLink belong to a user
export const shortenerRelation = relations(shortenerTable, ({one}) => ({
  user : one(usersTable, {
    fields : [shortenerTable.userId],  //it is showing FK of shortenerTable
    references : [usersTable.id]
  })
}))