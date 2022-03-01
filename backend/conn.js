const config = require('config')
const db_config = config.get('db')
const mysql = require("mysql");

let host, user, password, database, port = 3306
if(config.get("type") == 'D'){
    host = db_config.get("host_dev")
    user = db_config.get("user_dev")
    password = db_config.get("password_dev")
    database = db_config.get("db_dev")
}else{
    host = db_config.get("host_prod")
    user = db_config.get("user_prod")
    password = db_config.get("password_prod")
    database = db_config.get("db_prod")
    port = db_config.get("port_prod")
}
const db = mysql.createConnection({
    host,
    user,
    password,
    database,
    port  
})

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("MySql Connected");
});

module.exports = db