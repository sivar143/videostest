var mysql      = require('mysql');
var con = mysql.createConnection({
    host     : "databases-auth.000webhost.com",
    database : 'id10433952_videos',
    user     : 'id10433952_siva',
    password : '12345',
});

con.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + con.threadId);
});

con.query('INSERT INTO `video` (`Id`, `Name`, `Link`) VALUES (NULL, '', '')', function (error, results, fields) {
    if (error)
        throw error;

    results.forEach(result => {
        console.log(result);
    });
});

con.end();