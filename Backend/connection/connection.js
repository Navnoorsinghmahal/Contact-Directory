let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user:  'root',
    password: 'System123@',
    database: 'node_react'
})

connection.connect((e)=>{
    if(e)
    {
        console.log(e.message)
    }
    else{
        console.log("Database Connected");
    }
})

module.exports = connection;