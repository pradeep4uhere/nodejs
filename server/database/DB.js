var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'admin@123',
  database : 'react_db'
});

connection.connect()

connection.query('SELECT * from posts', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0])
})

connection.end()
