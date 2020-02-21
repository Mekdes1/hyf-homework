const express = require("express");
const router = express();

const meals = require("../data/meals.json");

const cheapMeal = meals.filter(itemMeal => itemMeal.price < 70);

router.get("/cheap-meals", (request, response) => {
  response.json(cheapMeal);
});

module.exports = router;
