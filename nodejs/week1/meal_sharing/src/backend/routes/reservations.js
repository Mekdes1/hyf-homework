const express = require("express");
const router = express.Router();
const reservations = require("../data/reservations.json");

router.get("/reservations", (request, responsse) => {
  responsse.json(reservations);
});

module.exports = router;
