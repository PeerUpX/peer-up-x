const express = require ('express');
const Supporter = require("../models/Supporter");
const Review = require ("../models/Review");
const Student = require("../models/Student");

const router = express.Router();
router.post('/createReview', (req, res) => {
  Review.findOne({studentID: req.body.studentID, supporterID: req.body.supporterID, review: req.body.review}).then(review=>{
      if(review){
          return res.status(204).send({
              message: "The review already exists"
          })
      }
      else{
        const newReview = new Review({
            supporterID: req.body.supporterID, 
            studentID: req.body.studentID, 
            starRatings: req.body.starRatings,
            review: req.body.review,
            date: req.body.date
          })
          newReview.save()
            //  .then(student => res.json ({status: "success"}))
            //  .then (student => res.json (console.log('add student')))
            .catch(err => {
                return res.status(500).send({
                    message: "Internal server error, please try again later!",
                    error: err
                })
            });
          res.status(201).send(newReview);
      }
  })
  
})

router.get('/fetch/:supporterID', function (req, res) {
  Review.find({ supporterID: req.params.supporterID })
    .then(reviews => {
      if (!reviews[0]) {
        return res.status(204).send({
          message: "Property not found, or no reviews for supporter"
        })
      }
      else{
        return res.status(200).send({reviews, message: "Reviews successfully fetched"});   
      }
    })
    .catch(err => {
        return res.status(500).send({
            message: "Internal server error, please try again later!",
            error: err
        })
    });
})

module.exports = router;