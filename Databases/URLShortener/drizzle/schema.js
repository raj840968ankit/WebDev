import { int, mysqlTable, varchar } from 'drizzle-orm/mysql-core';

export const shortenerTable = mysqlTable('shortener', {
  id: int().autoincrement().primaryKey(),
  url: varchar({ length: 512 }).notNull(),
  shortCode: varchar({ length: 255 }).notNull().unique(),
});