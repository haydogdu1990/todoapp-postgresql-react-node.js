const Pool = require('pg').Pool
require('dotenv').config()

const pool =new Pool({
    user:process.env.USER_NAME,
    password: process.env.PASSWORD,
    host:process.env.HOST,
    port:process.env.DBPORT,
    database:'todoapp'
})

module.exports=pool

