
var mysql = require('mysql');

var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Rohan@123504",
        database : "QR_code"
});

con.connect(function(err) {
         if (err) throw err
        console.log("Mysql is connected ..........");
});


module.exports = con;