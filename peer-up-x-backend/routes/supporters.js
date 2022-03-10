const express = require('express');
const bcrypt = require('bcrypt');
const Supporter = require("../models/Supporter");
const connectDB = require('../db');

const router = express.Router();
const env = process.env.NODE_ENV || 'development';

const hashPassword = async (password, saltRounds = 10) => {
  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(saltRounds);

    // Hash password
    return await bcrypt.hash(password, salt);
  } catch (error) {
    console.log(error);
  }

  // Return null if error
  return null;
};

router.post("/register", async (req, res) => {

  const existingSuporter = await Supporter.findOne({"email": req.body.email}).catch(err => {
    // error thrown by mongo while finding a supporter
    return res.status(500).json({
      message: "Internal server error, please try again later!",
      error: err
    })
  });;

  // if a supporter with the email id already exists
  if(existingSuporter != undefined){
    return res.status(409).json({
      message: "A supporter with this email id already exists."
    });
  }

  // generating a hashed version of the password
  const hashedPassword = await hashPassword(req.body.password); 

  // creating the supporter object
  const newSupporter = new Supporter({
    nickname: req.body.nickname,
    availabilityHours: req.body.availabilityHours,
    story: req.body.story,
    school: req.body.school,
    specialty: req.body.specialty,
    isChatting: false,
    email: req.body.email,
    isOnline: false,
    password: hashedPassword
  }) 

  // saving the supporter in the database
  newSupporter.save()
    .catch(err => {
      return res.status(500).json({
        message: "Internal server error, please try again later!",
        error: err
      })
    });

    return res.status(201).json({
      message: "Registration successful!"
    })

});

router.post("/login", async (req, res) => {
  // accepting input credentials
  const inputEmail = req.body.email;
  const inputPassword = req.body.password;

  // looking for supporter with inputEmail in database
  const supporterTryingToLogin = await Supporter.findOne({"email": inputEmail}).catch(err => {
    // error thrown by mongo while finding a supporter
    return res.status(500).json({
      message: "Internal server error, please try again later!",
      error: err
    })
  });;

  // checking if no supporters with that email exist
  if(supporterTryingToLogin == undefined){
    return res.status(401).json({
      message: "Invalid email ID."
    });
  }

  // comparing inputPassword with encrypted password from database
  bcrypt.compare(inputPassword, supporterTryingToLogin.password, function(err, result) {
      if(err){
        return res.status(500).json({
          message: "Bcrypt encountered an error comparing passwords."
        });
      }
      if(result == true){
        res.cookie("email", supporterTryingToLogin.email, {
          maxAge: 7 * 24 * 60 * 60 * 1000,
          secure: ((env === 'development') ? false : true),
          httpOnly: true,
          sameSite: 'lax'
      });
      return res.status(200).json({
        message: "Successful login!"
      });
      }
      else{
        // returning 401 if password is invalid
        return res.status(401).json({
          message: "Invalid password."
        });
      }
  });
 
});

router.get('/fetch/:email', function (req, res) {
  Supporter.findOne({ // search by an email -> mostly so that we dont get multiple accounts with the same user
    $or:
      [{ "email": req.params.email }]
  }).then(supporter => {
    if (!supporter) {
      return res.status(200).send({
        message: "Supporter not found"
      })
    }
    return res.status(200).send({ supporter, message: "Supporter found!" });
  }).catch(err => {
    return res.status(500).send({
      message: "Internal server error, please try again later!",
      error: err
    })
  })
});

//still needs testing; but could be connected to edit profile potentially
router.put('/update/:supporterID', function (req, res) {
  if(!req.cookies.email){
    return res.status(401).json({
      message: "You are not authorized to use this endpoint."
    });
  }
  return res.status(200).send({
    message: "Authorized"
  })
  Supporter.findOneAndUpdate({ // search by an id
    $or:
      [{ "_id": req.params.supporterID }]
  }, {
    nickname: req.body.nickname,
    //isOnline: false, //assuming we want the user to sign in after registration
    availabilityHours: req.body.availabilityHours, //!
    story: req.body.story,
    school: req.body.school,
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
router.get('/fetchAll', function (req, res) {
  Supporter.find().then(supporters => {
    if (!supporters) {
      //return an error
      return res.status(202).send({
        message: 'did not find any'
      })
    }
    else {
      return res.status(200).send({ supporters, message: "successful" })
    }
  })
})

router.get("/logout", async (req, res) => {
  console.log("before clearing cookie");
  res.clearCookie("email");
  console.log("after clearing cookie");
  return res.status(201).send({
    message: "cookie erased"
  });
});

//TODO 11/17: change fetch/:email to fetch/:id; consider adding a delete route




module.exports = router;