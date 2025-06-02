import { int, mysqlTable, varchar, timestamp } from 'drizzle-orm/mysql-core';

export const shortenerTable = mysqlTable('shortener', {
  id: int().autoincrement().primaryKey(),
  url: varchar({ length: 512 }).notNull(),
  shortCode: varchar({ length: 255 }).notNull().unique(),
});

export const usersTable = mysqlTable("users", { 
  id: int().autoincrement().primaryKey(), 
  name : varchar({ length: 255}).notNull(), 
  email: varchar({ length: 255 }).notNull().unique(), 
  password: varchar({ length: 255}).notNull(), 
  createdAt: timestamp("created_at").defaultNow().notNull(), 
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(), 
});