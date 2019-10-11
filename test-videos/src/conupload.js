var mysql = require('mysql');

var con = mysql.createConnection({
  host: "databases-auth.000webhost.com",
  user: "id10433952_siva",
  password: "12345"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("use video", function (err, result) {
    if (err) throw err;
    console.log("Database connected");
  });
});