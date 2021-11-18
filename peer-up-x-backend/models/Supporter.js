const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const SupporterSchema = new Schema({
    nickname: String,
    email: String,    //need some unique identifier to check for account duplicates
    isAvailable: Boolean,
    availabilityHours: Array, //come back to it later; probably actually paired entires Date, array of boolean
    story : String,
    school : String, // might add later enum option
    specialty: String, // options
    isChatting: Boolean
})

module.exports = mongoose.model('supporter', SupporterSchema);

//reminder to clear the mongo db database of old schema entries