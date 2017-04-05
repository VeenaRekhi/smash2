// Import MySQL connection.
var connection = require("../config/connection.js");

//====================================================================================
// Helper function for SQL syntax.
function printQuestionMarks(num) {  // This function will help us to perform queries 
                                   //with the sql database
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

//====================================================================================
// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}
//====================================================================================
// Object for all our SQL statement functions.
var orm = {
  all: function(tableInput, cb) {    //====
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
//====================================================================================

// Creating a new object into the sql database

  create: function(table, cols, vals, cb) {//=== Function for passing the query with 
    var queryString = "INSERT INTO " + table; //a new object to the database 

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

//====================================================================================
  // Using update function with a query for addition of new objects "update/put" where 
  update: function(table, objColVals, condition, cb) { // objColVals would be  e.g.
    var queryString = "UPDATE " + table;         // {burger_name: cheesy_smash, devoured:true}

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },


//====================================================================================
  // Using dlete function with a query for subtraction of already created objects where 
  // objColVals would be {burger_name: cheesy_smash, devoured: true}
  delete: function(table, objColVals, condition, cb) {
    var queryString = " DELETE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
       }
       cb(result);
    });
  }

};

// Export the orm object for the model (burger.js).
module.exports = orm;
