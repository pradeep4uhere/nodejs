var mysql = require('mysql')
var db = mysql.createPool({
                      connectionLimit :10,
                      host: 'localhost',
                      user: 'root',
                      password: 'admin@123',
                      database: 'react_db'
              });
module.exports = {
  insertData : function(name,id) {
                    db.connect();
                    console.log(name+' '+age)
                    db.query('INSERT INTO post (title, description) VALUES (?, ?)', [name,id], function(err,result) {
                      if(err) throw err
                    });
                    db.end();
                }
}
