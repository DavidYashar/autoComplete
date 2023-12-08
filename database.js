const mySQL = require('mysql');

var conn = mySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'E1xfUH([xeROGMiJ',
    database: 'moving',
    port: 81
});

conn.connect(function(err) {
    if(err){
        throw err
    } else {
        console.log("data base is connected")
    }
    
})

module.exports = conn;