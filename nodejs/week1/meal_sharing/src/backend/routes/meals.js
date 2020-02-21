const express = require("express");
const router = express();

const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");

meals.forEach(mealItem => {
  mealItem.review = reviews.map(
    reviewItem => reviewItem.mealId === mealItem.id
  );
});

router.get("/meals", (request, response) => {
  response.json(meals);
});

module.exports = router;
