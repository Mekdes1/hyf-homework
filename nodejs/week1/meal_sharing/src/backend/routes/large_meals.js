const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");

const largeMeals = meals.filter(itemMeal => itemMeal.price > 70);

largeMeals.forEach(mealItem => {
  mealItem.review = reviews.filter(
    reviewItem => reviewItem.mealId === mealItem.id
  );
});

router.get("/large-meals", (request, response) => {
  response.json(largeMeals);
});

module.exports = router;
