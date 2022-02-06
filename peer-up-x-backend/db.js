const mongoose = require('mongoose')
require('dotenv').config()

const URI = process.env.URI

const connectDB = async () => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    console.log("MongoDB Successfully Connected!")
}

module.exports = connectDB