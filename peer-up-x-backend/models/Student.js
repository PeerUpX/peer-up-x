const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    school:String,
    onboardingNotes: String //would be replaced with more specific fields once onboarding side of figma is completed
})

module.exports = mongoose.model('student', StudentSchema);

//reminder to clear the mongo db database of old schema entries