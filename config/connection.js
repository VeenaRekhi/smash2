// Set up MySQL connection.
var mysql = require("mysql");
var connection;

console.log("About to check for jaws");
if (process.env.JAWSDB_URL)  {
  console.log("Inside Jaws");
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} 
else {
  console.log("On local");
  connection = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
  });

};

// Make connection.
connection.connect(); 

// Export connection for our ORM to use.
module.exports = connection;
