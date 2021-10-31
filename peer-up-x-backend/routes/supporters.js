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
            availabilityHours: req.body.availabilityHours,
            story : req.body.story,
            school : req.body.school,
            email: req.body.email
        }) //making sure our user input is in the right format
    
        newSupporter.save()
            .catch(err => {
                return res.status(500).json({
                    message: "Unidentified error! server might be down",
                    error: err
                })
            });

        res.json(201, newSupporter);
      
    })

});

// router.get('/fetch/:', function(req, res) {

// }

// router.put('/update', cookieAuth, function(req, res) {

// }

// router.delete("/delete/:", function (req, res) {

// }

module.exports = router;