const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const SupporterSchema = new Schema({
    nickname: String,
    email: String,    //need some unique identifier to check for account duplicates
    isAvailable: Boolean,
    availabilityHours: String,
    story : String,
    school : String // might add later enum option
})

module.exports = mongoose.model('supporter', SupporterSchema);

