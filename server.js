const express = require('express')
const app = express()
const mysql = require('mysql')

app.get('/', function (req, res) {
  res.send('Hello World')
})

var con = mysql.createConnection({ //creates a connection object with config
    host: "35.197.201.103", // add the url of the Database Server
    user: "project", // the username for the Database Server
    password: "project", // the password for the Database Server
    database: "assessment" // the Database to use
  }); // this needs to be updated, obviously


con.connect(function(err) { //calls connect, a method of the connection object, with a callback
    if (err) throw err; // specifies what to do in the case of an error
    console.log("Connected to DB!"); // tells me I'm connected
    let sql = "select * from testing;"; // the database query to use to return info
    con.query(sql, function (err, result) { // executes above query using a callback specifying...
      if (err) throw err; // what to do with an error
      if (result) {processData(result)}; // what to do with a result, i.e. calls function below
    });
    
  });
  function processData (result){
    console.log(result)
}
app.listen(3000)

