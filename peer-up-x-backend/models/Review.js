const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    supporterID:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'supporter'
    },
    starRatings: Number,
    userID:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    review: String,
    date: { type: Date, default: Date.now }

})

module.exports = mongoose.model('review', ReviewSchema);