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
// ADD COLUMN orders VARCHAR(255)
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

// 清空list
// connection.query('UPDATE tokens SET succeed_id = NULL;', function (err, results, fields) {

//   if (err) {
//     // return res.send(err)
//   }
//   console.log(results);
// })

// connection.query('DELETE FROM tokens WHERE id = 104;', function (err, results, fields) {
//   if (err) {
//     // return res.send(err)
//   }
//   console.log(results);
// })

// connection.query('SELECT * FROM tokens', function (err, results, fields) {
//   console.log(results[19]);

// })
// connection.query('DELETE FROM succeed')

// connection.query('UPDATE tokens SET succeed_id = ? WHERE access_token = ?', ['1234', 'eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNqEkE-LwjAQxb_LnHtIJv3rUXFZwWVB9OBJ0nRKC20iabrsrvjdTYkVT3qcx_vNmzcXMHJ0zUbXBhZ67LoIxoFsmC9Qtv8rUxEs4ONze_qCCIaxXD7ENBaZkmWMBSdKGGNc8FwU3Ps8uTPdZFoejuudV3qnDtPqagJTXldxglmaIPIJlHWS12UA39kquEZAv-fW0r7taT7ck99nstKZl7TyIcqSdHeYZ1yIFBlDzJkv-Dc46kPBsLcnqxqp3fOTfPpMFsgwgh-yQ2u0F8MHtZwPu94AAAD__w.hVTDXlT-EcKBLuVNcmS9Qc-UgMkqTZyimWRvL5ReCq-YLQkz_m0fYqLf1kQm4zxAOwPifsYPeDNRak7rQjnnYUExebqNS70QuEeQU0Of2uz-vZ9pIXi8gaDIwNHvN9VFdA3kwvsreHxN7KtEOzFsEKOdv6RAcwNesgANZs8QGPI'], (error, results, fields) => {
//   if (error){
//     console.log(error);
//     // return res.send('123')
//   }
//   // return res.send('succeed')
// });
// connection.query('UPDATE tokens SET access_token = ? WHERE refresh_token = ?', ['dsadasdasd', 'eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kDFvwyAUhP_Lmz0YgzHOmKpVKyWqFDVDpwrwQ7FkIAJctY3y34tD22TqyOnuO96dwMs5HZ6c8bBy8zRVMEcM5X0CNX7d-QFhBQ-Pm7ctVBBntf4TOaOdloo1PUFs67omlAjak-zLyZ2fFtN6_3q_y4pNer-ghyXYGmYGrCUXaMQSZLrlfVeCVxtvCFPYMCmJvPAFUcQYOFeAH8cx4MtocwfpiOAsezltxAXxfMQgk_8Xg7lNB5TpSqGsFb-U-BkT2nJpWcZi0Afp0u1a-Ru3_RW8Y4ijd1ksUzppfwDnbwAAAP__.HjkkNrpb2o_tumqii6lPZSPyk-c5iNJlZOoPPL4Bsyo6bc7h6y56aPRH9Su1plkfJCdujLF0B8iIfQpd-3eGdAh4Mc187DwMp8n72RChTByFF7WYAsb-_6Ed_EMiZohaYxrNftwQfYswGwgdqspKcrx8Gg_sm8gwiw3e7fL3OZQ'], (error, results, fields) => {
//   if (error){
//     // return res.send(error)
//   }
//   // return res.send('succeed')
// });
connection.end(function (err) {
  if (err) {
    return console.log(err.message);
  }
});



