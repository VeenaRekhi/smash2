

// Controller-routes - this file offers a set of routes for displaying and saving data to the db
// ************************************************************************************************

//  Dependencies
//===========================================================================================

// Using expres to perform our server operations
var express = require("express");

// Using routers the routes for the server
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models");
var burger = require("../models/burger.js");

//  Routes---
// Create all our routes and set up logic within those routes where required.

//  GET route for getting all the burgers from the database
//===========================================================================================
router.get("/", function(req, res) {//=== For this we need "get"
console.log("inside get /");
  db.Burger.findAll({}).then(function(dbBurger) {  // request function "route" to define data
  var hbsObject = {
      burgers: dbBurger
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// POST route for posting all of the burgers
//===========================================================================================

router.post("/", function(req, res) { //== Posting a client request through this route to 
    console.log("Burger Data:");
    console.log(req.body);
  db.Burger.create({                    // create a "new burger object" with given params.
    burger_name: req.body.burger_name,
    devoured: req.body.devoured, 
    createdAt: req.body.date
  }).then(function(dbBurger) {
//    res.json(dbBurger);
    res.redirect("/");  //=== Now updating the response with the given "condition"
  });
}); 


// UPDATE route for updating anyone burger with specific "id" of the burgers
//====================================================================================
router.put("/:id", function(req, res) { // Redirecting the route for "object burger" with 
  var condition = "id = " + req.params.id; // a given "id" for "condition: devoured" 

  console.log("condition", condition);

  db.Burger.update({                //== Now updating the response with the given "condition"
    devoured: req.body.devoured
   // updatedAt: req.body.date
  }, {
    where: {
      id: req.params.id
    }
  }).then(function(dbBurger) {
//    res.json(dbBurger);
    res.redirect("/");
  });
});


// DELETE route for deleting anyone burger with specific "id" of the burgers
//====================================================================================
router.put("/:id", function(req, res) {  // Using the request "put" for a specific "condition"
 var condition = "id = " + req.body.id;  // with a given "id" for "delete" route.

 console.log("condition", condition);

 db.Burger.destroy({             // === Now updating the response with the given "condition"
   devoured: req.body.id
 }, {
  where: {
    id: req.params.id
  }
}).then(function(dbBurger) {
//   res.json(dbBurger);
   res.redirect("/");
 });
});


// GET route for getting all of the burgers
//====================================================================================

// Export routes for server.js to use.

module.exports = router;
