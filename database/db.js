var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'django',
//   database : 'fenty'
// });

// var connection = mysql.createConnection({
//   host     : 'fentyproducts.cwqvxzgnnmyy.us-west-1.rds.amazonaws.com',
//   port     : '3306',
//   user     : 'admin',
//   password : '87654321',
//   database : 'fenty'
// });

var connection = mysql.createConnection({
  host     : 'fenty.cfllt0uqgdrd.us-west-2.rds.amazonaws.com',
  port     : '3306',
  user     : 'admin',
  password : '87654321',
  database : 'fenty'
});

connection.connect();


connection.query('USE fenty');



// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });


module.exports = connection;


// aws rds add-role-to-db-instance \
// 	   --db-instance-identifier fentyproducts \
// 	   --feature-name S3_INTEGRATION \
// 	   --role-arn your-role-arn