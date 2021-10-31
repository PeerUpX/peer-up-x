const mongoose = require('mongoose')

const URI = "mongodb+srv://peerUpUser:peerUpPassword@peerupx-cluster0.lahfp.mongodb.net/peerUpDatabase?retryWrites=true&w=majority"

const connectDB = async () => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    console.log("MongoDB Successfully Connected!")
}

module.exports = connectDB