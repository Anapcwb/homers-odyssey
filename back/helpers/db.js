const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'homer_user',
  password : 'homerhomer',
  database : 'homers_odyssey'
});
module.exports  =  connection;