CREATE TABLE `hotels` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`address` varchar(255) NOT NULL,
	`location` varchar(255) NOT NULL,
	`rating` float,
	`rating_count` int,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`deleted_at` timestamp,
	CONSTRAINT `hotels_id` PRIMARY KEY(`id`)
);
