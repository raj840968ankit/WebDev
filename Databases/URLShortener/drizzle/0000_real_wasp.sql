CREATE TABLE `shortener` (
	`id` int AUTO_INCREMENT NOT NULL,
	`url` varchar(512) NOT NULL,
	`shortCode` varchar(255) NOT NULL,
	CONSTRAINT `shortener_id` PRIMARY KEY(`id`),
	CONSTRAINT `shortener_shortCode_unique` UNIQUE(`shortCode`)
);
