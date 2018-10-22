var mysql = require('mysql')
var config;
config = {
connection : mysql.createConnection({
                      host: 'localhost',
                      user: 'root',
                      password: 'admin@123',
                      database: 'react_db'
              })
}
module.exports = config;
