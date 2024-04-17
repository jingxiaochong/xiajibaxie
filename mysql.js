const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '116.62.122.121',
  port: '3306',
  user: 'root',
  password: 'jxc123456',
  charset: 'utf8',
  database: 'info'
})

connection.connect(function (err) {
  if (err) {
    return console.error(err);
  }
});

// 修改长度
// connection.query(`ALTER TABLE tokens MODIFY COLUMN access_token VARCHAR(1000)`,[5], function (error, results, fields) {
//   if (error) {
//     return console.error(error);
//   }
// })

// 加字段
// connection.query(`
// ALTER TABLE tokens
// ADD COLUMN refresh_token VARCHAR(1000)
// `, function (error, results, fields) {
//   if (error) { console.log(error); }
//   console.log('success');
// })


// function createTable(params) {
//   let createTodos = `create table if not exists tokens(
//     id int AUTO_INCREMENT PRIMARY KEY,
//     access_token varchar(1000) NOT NULL,
//     user varchar(255),
//     card_id VARCHAR(255),
//     phone VARCHAR(255)
//   );
//   `;

//   connection.query(createTodos, function (err, results, fields) {
//     if (err) {
//       console.log(err.message);
//     }
//   });
// }



// function deleteTable() {
//   // 执行SQL语句删除表格
//   connection.query(`DROP TABLE IF EXISTS tokens`, (err, results, fields) => {
//     if (err) {
//       console.error('Error dropping table: ' + err.message);
//       return;
//     }
//     console.log('Table dropped successfully');
//   });
// }

// deleteTable()
// createTable()

// connection.query('INSERT INTO tokens (id, access_token) VALUES (1, "token")', function (err, results, fields) {
//   if (err) {
//     console.log(err.message);
//     return
//   }
//   console.log('success');
// })

// connection.query(`DROP TABLE IF EXISTS succeed`, (err, results, fields) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('Table dropped successfully');
// });

// var values = [
//   ["index", "www.alibaba.com"],
//   ["index1", "www.google.com"]
// ];

// connection.query('INSERT INTO succeed(access_token,succeed_id) VALUES ?', [values], function (err, rows, fields) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("INSERT SUCCESS");
// });


// let createTodos = `create table if not exists active_info(
//   id int AUTO_INCREMENT PRIMARY KEY,
//   data varchar(100),
//   startTime varchar(100),
//   endTime varchar(100),
//   reservationConfigId varchar(100)
// );
// `;

// connection.query(createTodos, function (err, results, fields) {
//   if (err) {
//     console.log(err.message);
//   }
// });



// connection.query('SELECT * FROM tokens', function (err, results, fields) {
//   if (err) {
//     // return res.send(err)
//   }
//   console.log(results);
// })

// connection.query('DELETE FROM succeed')
connection.end(function (err) {
  if (err) {
    return console.log(err.message);
  }
});



