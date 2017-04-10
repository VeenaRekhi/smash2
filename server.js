// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var port = process.env.PORT || 3000;   // setting up port at localhost 3000.

var app = express();  // setting up variable app with express server functioning

// Requiring our models for syncing
var db = require("./models");

//app.set('port', (process.env.PORT || 3000));
// Serving static content for the app(program) from the "public" directory(client side) 
//to the Application directory(server side).

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded ({ extended: false })); // using bodyparser(json-parser) for encoding the url.

// Override with "POST" having ?_method = DELETE

app.use(methodOverride("_method"));

// Setting up Handlebars with the server.

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs ({ defaultLayout: "main" })); //app listening to the handlebars engine 
app.set("view engine", "handlebars");

// Import routes and give the express server port 3000 access to them.
var routes = require ("./controllers/burgers_controller.js");

app.use("/", routes);  // app listening on routes to the burger_controller.js

//app.listen(port);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync().then(function() {
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});



