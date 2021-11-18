const express = require ('express');
const Student = require("../models/Student");

const router = express.Router();

router.post("/register", (req, res) => {
      
  Student.findOne({
        $or:
            [{"email":req.body.email}]
    }).then(student => {
        if (student) {             
            return res.status(202).send({
                message: "This user already exists!"
            })
        }

        const newStudent = new Student({
          school: req.body.school,
          onboardingNotes: req.body.onboardingNotes
        }) 
    
        newStudent.save()
            .catch(err => {
                return res.status(500).json({
                    message: "Internal server error, please try again later!",
                    error: err
                })
            });

        res.json(201, newStudent);
      
    })

});

router.get('/fetch/:id', function(req, res) {
    Student.findOne({ 
      $or:
          [{"_id": req.params.id}]
    }).then(student => {
      if (!student) {
        return res.status(200).send({
          message: "Student not found"
        })
      }
      return res.status(200).send({student, message: "Student found!"});   
    }).catch(err => {
      return res.status(500).send({
        message: "Internal server error, please try again later!",
        error: err
      })
    })
});

//TODO 11/17: change fetch/:email to fetch/:id; consider adding a delete route




module.exports = router;