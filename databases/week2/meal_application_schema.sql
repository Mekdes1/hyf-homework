-- Part 4: Meal application
create database meal_application;
use meal_application;
  
CREATE TABLE `meal` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `when` datetime  NOT NULL,
  `max_reservataion` int(10) unsigned NOT NULL,
  `price` DECIMAL(6)  NOT NULL,
`created_date` DATE NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `reservation` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`number_of_guests` int(10) unsigned NOT NULL,
`meal_id` int(10) unsigned NOT NULL,
`created_date` DATE NOT NULL,
  CONSTRAINT `fk_meal_id` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `review` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`title` varchar(255) NOT NULL,
`description` text NULL DEFAULT NULL,
`review_meal_id` int(10) unsigned  NOT NULL,
`stars` int(5) unsigned NULL,
`created_date` DATE NOT NULL,
  CONSTRAINT `fk_review_meal_id` FOREIGN KEY (`review_meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  
 -- meal
insert into meal  value (2, 'Chicken Saltimbocca', 'made with chicken', 'Lyngbygårdsvej, 2800 Kgs.Lyngby', '2020-02-07', 10, 150, now());
insert into meal  value (3, 'Lasagna', 'great meal', 'Lyngbygårdsvej, 2800 Kgs.Lyngby', '2020-02-12', 10, 200, now());
insert into meal  value (4, 'Linguine With Clam Sauce', 'with clam sauce', 'Lyngbygårdsvej, 2800 Kgs.Lyngby', '2020-02-14', 10, 150, now());

-- reservation
insert into reservation(id, number_of_guests, meal_id, created_date) values(1, 10, 2, now());
insert into reservation(id, number_of_guests, meal_id, created_date) values(2, 15, 3, now()); 
insert into reservation(id, number_of_guests, meal_id, created_date) values(3, 20, 3, now());


