create database students;
use students;

CREATE TABLE `Student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `Class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `Instractor` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
   `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `student_class` (
  `id`  int(10) NOT NULL PRIMARY KEY,
  `student_id` int(10) unsigned NOT NULL,
  `class_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_student_class_students` FOREIGN KEY (`student_id`) REFERENCES `Student` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_student_class_class` FOREIGN KEY (`class_id`) REFERENCES `Class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `student_instractor` (
  `id`  int(10) NOT NULL PRIMARY KEY,
  `student_id` int(10) unsigned NOT NULL,
  `instractor_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_student_class_student` FOREIGN KEY (`student_id`) REFERENCES `Student` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_student_class_instractor` FOREIGN KEY (`instractor_id`) REFERENCES `Instractor` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


