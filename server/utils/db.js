// db.js
import mysql from 'mysql';

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employeems"
});

con.connect(err => {
    if (err) {
        console.error("Connection error: " + err.stack);
        return;
    }
    console.log("Connected as id " + con.threadId);
});

export default con;
