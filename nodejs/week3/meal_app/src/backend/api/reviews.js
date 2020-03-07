
const express = require("express");
const app = express();
const router = express.Router();
const pool = require("../database");

router.get("/", (request, response) => {
    
    const query = pool.query("SELECT * FROM review ", function(error,results,field) {
      if (error) {
        throw error;
      }
      response.send(results);
    });
  
  });

router.post("/", (request, response) => {
  const data =  {
    "Title": "Good",
    "Description": " good meal",
    "review_meal_id": 4,
    "Stars": 3,
    "created_date": "2020-02-14"
}
  const query = pool.query(" INSERT INTO review SET? ", data, function(error, results, fields) {
    if (error) {
      throw error;
    }
    response.send(` Added review id : ${data.review_meal_id} to your reservation`);
  });


});

router.get("/:id", (request, response) => {
  const id = request.params.id;

  const query = pool.query("SELECT * From review WHERE id = ? ", id, function(
    error,
    results,
    fields
  ) {
    if (error) {
      throw error;
    }
    response.json(results);
  });
  
});

router.put("/:id", (request, response) => {
  const id = request.params.id;

  const query = pool.query("UPDATE review SET stars = 5  WHERE id = ? ", id, function(error, results, fields) {
      if (error) {
        throw error;
      }
      response.send(` Updated review with id : ${id}`);
    }
  );
 
});

router.delete("/:id", (request, response) => {
  const id = request.params.id;

  const query = pool.query("DELETE FROM review WHERE id = ? ", id, function( error, results, fields ) {
    if (error) {
      throw error;
    }
    response.send(` Removed review with id : ${id}`);
  });
 
});


module.exports = router;
