const mongoose = require('mongoose');
require('dotenv').config()
const dbUrl = process.env.DB_URL || 4000;

const connectToMongo = () => {
    mongoose.set("strictQuery", false);
    mongoose.connect(dbUrl)
        .then(() => {
            console.log("DATABASE CONNECTED")
        })
        .catch(err => {
            console.log("OH NO ERROR!!!!")
            console.log(err)
        })
}
module.exports = connectToMongo;
