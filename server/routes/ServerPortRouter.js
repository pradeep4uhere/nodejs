const express = require('express');
const app = express();
const ServerPortRouter = express.Router();
var db = require('../database/db');
ServerPortRouter.route('/add').post(function (req, res) {
  var name = req.body.name;
  var port = req.body.port;
  // Connect to MySQL on start
  db.connection.getConnection(function(err,connection){
    if (err) {
      res.json({"code" : 100, "status" : "Error in connection database"});
      return;
    }   
    console.log('You are now connected... id ' + connection.threadId);
    var sql = "INSERT INTO posts (title, description, user_id) VALUES ?";
    var values = [[name, port,57]];
    connection.query(sql, [values], function(error, results) {
          if (error) throw res.json(error);
            res.json('Data Inserted Suucessfully');
          })
    connection.on('error', function(err) {      
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;     
    });
  });
});

ServerPortRouter.route('/').get(function (req, res) {
    
});

ServerPortRouter.route('/edit/:id').get(function (req, res) {
  
});

ServerPortRouter.route('/update/:id').post(function (req, res) {
    
});

ServerPortRouter.route('/delete/:id').get(function (req, res) {
    
});
module.exports = ServerPortRouter;
