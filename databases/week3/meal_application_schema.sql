-- Part 4: Meal application
create database meal_application;
use meal_application;
  
CREATE TABLE `Meal` (
  `Id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `Title` varchar(255) NOT NULL,
  `Description` Text NOT NULL,
  `Location` varchar(255) NOT NULL,
  `When` datetime  NOT NULL,
  `max_reservation` int(10) unsigned NOT NULL,
  `Price` DECIMAL(6)  NOT NULL,
`created_date` date  NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `Reservation` (
`Id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`number_of_guests` int(10) unsigned NOT NULL,
`meal_id` int(10) unsigned NOT NULL,
`created_date` date NOT NULL,
  CONSTRAINT `fk_meal_Id` FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `Review` (
`Id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`Title` varchar(255) NOT NULL,
`Description` text NOT NULL,
`review_meal_id` int(10) unsigned  NOT NULL,
`Stars` int(5) unsigned NULL,
`created_date` DATE NOT NULL,
  CONSTRAINT `fk_review_meal_id` FOREIGN KEY (`review_meal_id`) REFERENCES `Meal` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  

 -- meal
insert into Meal  value (null, 'Chicken Saltimbocca', 'made with chicken', 'Lyngbygårdsvej, 2800 Kgs.Lyngby', '2020-02-018 04:00', 14, 150, '2020-02-14');
insert into Meal  value (null, 'Lasagna', 'great meal', 'Lyngbygårdsvej, 2800 Kgs.Lyngby', '2020-02-19 14:00', 15, 200, '2020-02-15');
insert into Meal  value (null, 'Linguine With Clam Sauce', 'with clam sauce', 'Lyngbygårdsvej, 2800 Kgs.Lyngby', '2020-02-19 09:00', 12, 150, '2020-02-17');
insert into Meal  value (null, 'Smoked Salmon Sushi Roll', 'Sushi rolls with salmon',  'Lyngbygårdsvej, 2800 Kgs.Lyngby','2020-02-19 19:00', 12 ,200,'2020-02-17');
-- reservation
insert into Reservation(number_of_guests, meal_id, created_date) values(10, 2, '2020-02-12');
insert into Reservation(number_of_guests, meal_id, created_date) values(8, 1, '2020-02-15'); 
insert into Reservation(number_of_guests, meal_id, created_date) values(6, 3, '2020-02-10');
insert into Reservation(number_of_guests, meal_id, created_date) values(4, 4,'2020-02-14');

-- review 
insert into Review(Title, Description, review_meal_id, Stars, created_date) values('Good','It was a good meal', '1', '4', '2020-02-15');
insert into Review(Title, Description, review_meal_id, Stars, created_date) values('Good','It was a good meal', '2', '4', '2020-02-17');
insert into Review(Title, Description, review_meal_id, Stars, created_date) values('Okay','It was okay', '3', '3', '2020-02-11');
insert into Review(Title, Description, review_meal_id, Stars, created_date) values('very good','It was very good', '4', '5', '2020-02-12');
