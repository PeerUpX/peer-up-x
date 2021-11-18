const express = require ('express');
const Supporter = require("../models/Supporter");

const router = express.Router();

router.post("/register", (req, res) => {
      
    Supporter.findOne({
        $or:
            [{"email":req.body.email}]
    }).then(supporter => {
        if (supporter) {             
            return res.status(202).send({
                message: "This user already exists!"
            })
        }

        const newSupporter = new Supporter({
            nickname: req.body.nickname,
            isAvailable: false, //assuming we want the user to sign in after registration
            availabilityHours: req.body.availabilityHours, //!
            story : req.body.story,
            school : req.body.school,
            specialty: req.body.specialty,
            isChatting: false,
            email: req.body.email

        }) //making sure our user input is in the right format
    
        newSupporter.save()
            .catch(err => {
                return res.status(500).json({
                    message: "Internal server error, please try again later!",
                    error: err
                })
            });

        res.json(201, newSupporter);
      
    })

});

router.get('/fetch/:email', function(req, res) {
    Supporter.findOne({ // search by an email -> mostly so that we dont get multiple accounts with the same user
      $or:
          [{"email": req.params.email}]
    }).then(supporter => {
      if (!supporter) {
        return res.status(200).send({
          message: "Supporter not found"
        })
      }
      return res.status(200).send({supporter, message: "Supporter found!"});   
    }).catch(err => {
      return res.status(500).send({
        message: "Internal server error, please try again later!",
        error: err
      })
    })
});

//still needs testing; but could be connected to edit profile potentially
router.put('/update/:supporterID', function(req, res) {
  Supporter.findOneAndUpdate({ // search by an id
      $or:
          [{"_id": req.params.supporterID}]      
  }, {
        nickname: req.body.nickname,
        //isAvailable: false, //assuming we want the user to sign in after registration
        availabilityHours: req.body.availabilityHours, //!
        story : req.body.story,
        school : req.body.school,
        specialty: req.body.specialty,
        //isChatting: false,
        email: req.body.email
      }).then(supporter => {
    console.log(supporter);
    if (!supporter) {
      return res.status(400).send({
        message: "this user does not exist"
      })
    }
    return res.status(200).send(supporter);
  }).catch(err => {
      return res.status(500).send({
          message: "Internal server error, please try again later!",
          error: err
      })
  });
});

//implement the fetchAll endpoint:
router.get('/fetchAll', function (req, res){
  Supporter.find().then(supporters => {
    if (!supporters){
      //return an error
      return res.status(202).send({ 
        message: 'did not find any'
      })
    }
    else{
      return res.status(200).send({supporters, message: "successful"})
    }
  })
})

//TODO 11/17: change fetch/:email to fetch/:id; consider adding a delete route




module.exports = router;