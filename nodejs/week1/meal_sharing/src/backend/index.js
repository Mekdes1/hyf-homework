const express = require("express");
const app = express();

const meals = require("./routes/meals.js");
const cheapMeals = require("./routes/cheap_meals.js");
const largeMeals = require("./routes/large_meals.js");
const meal = require("./routes/meal.js");
const reservations = require("./routes/reservations.js");
const reservation = require("./routes/reservation.js");


app.get("/meals", meals);
app.get("/cheap-meals", cheapMeals);
app.get("/large-meals",largeMeals);
app.get("/meal",meal);
app.get("/reservations",reservations);
app.get("/reservation",reservation);

app.listen(3000);