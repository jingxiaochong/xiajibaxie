const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: 'jxc123456',
  charset  : 'utf8mb4',
  // database: 'your_database'
})

connection.connect((err) => {
  console.log(err);
})

// connection.query('SELECT * FROM your_table', (err, results) => {
  
// })