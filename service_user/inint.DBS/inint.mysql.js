const mysql2 = require("mysql2");
    const connection = mysql2.createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE
    });
    connection.connect((ero)=>{
        if(ero){
             console.log(ero);
             throw new ero;
        }
        console.log('connection');
    });


module.exports = connection