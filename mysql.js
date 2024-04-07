const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'jxc123456',
  charset: 'utf8',
  database: 'info'
})

connection.connect(function (err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
});


function createTable(params) {
  let createTodos = `create table if not exists tokens(
    id int AUTO_INCREMENT PRIMARY KEY,
    access_token varchar(21840) NOT NULL
  );
  `;

  connection.query(createTodos, function (err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });
}



function deleteTable() {
  // 定义要删除的表格名称
  const tableName = 'tokens';
  // 构建删除表格的SQL语句
  const dropTableQuery = `DROP TABLE IF EXISTS ${tableName}`;
  // 执行SQL语句删除表格
  connection.query(dropTableQuery, (err, results, fields) => {
    if (err) {
      console.error('Error dropping table: ' + err.message);
      return;
    }
    console.log('Table dropped successfully');
  });
}
// deleteTable()
createTable()

// connection.query('INSERT INTO tokens (id, access_token) VALUES (1, "token")', function (err, results, fields) {
//   if (err) {
//     console.log(err.message);
//     return
//   }
//   console.log('success');
// })


connection.end(function (err) {
  if (err) {
    return console.log(err.message);
  }
});



