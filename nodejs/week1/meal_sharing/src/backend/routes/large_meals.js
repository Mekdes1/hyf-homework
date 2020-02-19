const express = require("express");
const router = express();

const meals = require("../data/meals.json");
const review = require("../data/reviews.json");

const largeMeals = meals.filter(itemMeal => {
  if (itemMeal.price > 70) {
    return true;
  }
});

largeMeals.forEach(mealItem => {
  mealItem.review = [];
  review.forEach(reviewItem => {
    if (reviewItem.mealId === mealItem.id) {
      mealItem.review.push(reviewItem);
    }
  });
});

router.get("/large-meals", (request, response) => {
  response.json(largeMeals);
});

module.exports = router;