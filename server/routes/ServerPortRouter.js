const express = require('express');
const app = express();
const ServerPortRouter = express.Router();
ServerPortRouter.route('/add').post(function (req, res) {
  const DB = require('../database/db');
  var name = req.body.name;
  var port = req.body.port;
  // Connect to MySQL on start
  DB.connection.connect(function(err) {
    if (err) throw err
    console.log('You are now connected...')
    var sql = "INSERT INTO posts (title, description, user_id) VALUES ?";
    var values = [
      [name, port,57]
    ];
    DB.connection.query(sql, [values], function(err, results) {
        if (err) throw res.json(err);
        res.json('Data Inserted Suucessfully');
        DB.connection.end();
        console.log('You are dissconnected...')
      })
  })


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
