const mongoose = require("mongoose")

const connection = mongoose.createConnection("mongodb+srv://ddukkseeroo:6OW9tMiB5IWpSItA@o4offers.k2fvd.mongodb.net/O4Offers"). on('open', () => {
    console.log("MongoDB Connected!!");
}).on('error', () => {
    console.log("MongoDB connection error!");
})

module.exports = connection