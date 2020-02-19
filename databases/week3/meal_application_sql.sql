-- Meal
-- Get all meals
select *
from Meal;
-- Add a new meal
insert into Meal Value(null,'Pasta', 'pasta with chicken', 'Lyngbygårdsvej, 2800 Kgs.Lyngby' ,'2020-12-07 18:00', 12, 250, '2020-02-07');

-- Get a meal with any id, fx 17
select *
from Meal 
where  Id=4;
-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
update Meal 
set Title = 'pizza', Price = 250
where Id = 3;
-- Delete a meal with any id, fx 1
delete from Meal 
where Id = 3;

-- Reservation

-- Get all reservations
select *
from Reservation;
-- Get a reservation with any id, fx 1
select *
from Reservation
where Id=1 ;
-- Add a new reservation
insert into Reservation(number_of_guests, meal_id, created_date) Value(8, 5, '2020-02-12');

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
update Reservation 
set number_of_guests = 8
where Id = 4;
-- Delete a reservation with any id, fx 1
delete from Reservation
where id = 3;

-- Review
-- Get all reviews
select *
from Review;
-- Add a new review
insert into Review(Title, Description, review_meal_id, Stars, created_date) Value('Very Good', 'It was a great meal' , 5, 4, '2020-02-11'); 


-- Get a review with any id, fx 1
select *
from Review 
where id =1;
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
update Review  
set Stars = 4
where id =1;
-- Delete a review with any id, fx 1
delete from Review
where id=3;

-- Additional queries
-- Get meals that has a price smaller than a specific price fx 90
select *
from Meal 
where price < 200;
-- Get meals that still has available reservations
select Meal.Id,Meal.Title, Meal.max_reservation ,sum(Reservation.number_of_guests) as total
from Meal
inner join Reservation on Reservation.meal_id = Meal.Id
group by Meal.Id 
having total < max_reservation;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT *   
from Meal   
where Meal.Title like '%Salmon%';
-- Get meals that has been created between two dates
select * 
from Meal
where  created_date between '2020-02-06'and'2020-02-14';
-- Get only specific number of meals fx return only 5 meals
select * 
from Meal
limit 3;
-- Get the meals that have good reviews
select Meal.*, Review.Title, Review.Stars
from Meal 
inner join Review on Review.review_meal_id = Meal.id
where Review.stars > 3;
-- Get reservations for a specific meal sorted by created_date
select Meal.*, Reservation.created_date 
from Reservation
inner join Meal on Meal.Id = Reservation.meal_id
where Meal.Id = 2
ORDER BY Reservation.created_date ASC;
-- Sort all meals by average number of stars in the reviews
select Meal.Title, AVG(Review.Stars) 
from Meal 
inner join Review on Review.review_meal_id = Meal.id
group by Meal.title
ORDER BY Review.Stars ASC;
