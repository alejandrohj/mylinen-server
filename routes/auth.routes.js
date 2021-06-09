const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const session      = require('express-session');
const MongoStore   = require('connect-mongo')(session);

const { isLoggedIn } = require('../helpers/auth-helper');

const UserModel = require('../models/user.model');
const SessionFeedModel = require('../models/allSessions.model');

router.post('/signup', (req, res) => {
  const {userName, firstName, lastName, email, password, userType, complex, rfidComplexId} = req.body;
  if (!userName) {
    res.status(500)
      .json({
        error: 'Por favor introduce un email válido'
      });
    return;  
  }

  if (!email) {
    res.status(500)
      .json({
        error: 'Porfavor introduce email'
      });
    return;  
  }

  if (!password) {
    res.status(500)
      .json({
        error: 'Porfavor introduce contraseña'
      });
    return;  
  }

  const emailRegEx = new RegExp(/^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/);
  if (!emailRegEx.test(email)) {
    res.status(500)
      .json({
        error: 'Por favor introduce un email valido'
      })
    return;
  }

  const passwordRegEx = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
  if (!passwordRegEx.test(password)) {
    res.status(500)
      .json({
        error: 'Password must contain letter, uppercase letter, number and a special character, and needs to have 8 characters.'
      })
    return;
  }
  bcrypt.genSalt(10)
    .then((salt) => {
      bcrypt.hash(password, salt)
          .then((passwordHash) => {
            let complexId
            complex?  complexId= complex._id : complexId =null;
            UserModel.create({email, userName, firstName,lastName, passwordHash, userType, complex: complexId, rfidComplexId})
              .then((user) => {
                user.passwordHash = "***";
                req.session.loggedInUser = user;
                console.log(req.session)
                res.status(200).json(user);
              })
              .catch((err) => {
                if (err.code === 11000) {
                  res.status(500)
                    .json({
                      error: 'Username or email already exists!'
                    });
                  return;  
                } 
                else {
                  res.status(500)
                    .json({
                      error: 'Something went wrong!'
                    });
                  return; 
                }
              })
          })  
    });

})


router.post('/signin', (req, res) => {
  const {email, password} = req.body;
  const today = new Date();
  if (!email) {
    res.status(500)
      .json({
        error: 'Porfavor introduce tu email'
      });
    return;
  }

  if (!password) {
    res.status(500)
      .json({
        error: 'Porfavor introduce tu contraseña'
      });
    return;
  }

  const myRegex = new RegExp(/^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/);
    if (!myRegex.test(email)) {
      res.status(500)
        .json({
          error: 'Porfavor introduce un email valido',
        })
      return;  
    }

    UserModel.findOne({email})
      .then((user) => {
        bcrypt.compare(password, user.passwordHash)
          .then((matches) => {
            if (matches) {
              user.passwordHash = "***";
              req.session.loggedInUser = user;
              SessionFeedModel.create({loggedInUserId: user._id, when: today})
                .then((ses)=>{
                  console.log('Signin succes!', req.session)
                  console.log(user)
                  res.status(200).json(user);
                })
            }
            else {
              res.status(500)
                .json({
                  error: 'La contraseña no coincide porfavor intentalo de nuevo'
                })
              return;
            }
          }).catch(() => {
            res.status(500)
              .json({
                error: 'La contraseña no coincide porfavor intentalo de nuevo'
              })
            return;
          });
      }).catch(() => {
        res.status(500).json({
          error: 'Ese email no está registrado, por favor introducelo de nuevo'
        })
        return;
      });
})

router.post('/logout', (req, res) => {
  req.session.destroy();
  res
  .status(204)
  .send()
  console.log('succes')
})

router.get('/user', isLoggedIn, (req, res, next) => {
  res.status(200).json(req.session.loggedInUser);
});

router.post('/user/:id/edit', isLoggedIn, (req, res) => {
  console.log('editing',req.body)
  const {firstName,email,userType,complex} = req.body;

  UserModel.findByIdAndUpdate(req.params.id, {$set: {firstName,email,userType,complex: complex? complex: null}})
    .then((user) => {
      res.status(200).json(user)
    })
    .catch((err) => {
      res.status(500).json({
        error: 'Cannot update user',
        message: err
      })
      return;
    });
})

router.get('/user/all', isLoggedIn, (req, res, next) => {
  UserModel.find()
  .populate('complex')
    .then((data)=>{
      res.status(200).json(data)
    }).catch((err) => {
      res.status(500).json({
        error: 'Cannot find any user',
        message: err
      })
      return;
    });
});

router.put('/user/:id/disabled', isLoggedIn, (req, res) => {
  UserModel.findById(req.params.id)
  .then((response)=>{
    console.log(response)
    UserModel.findByIdAndUpdate(req.params.id, {$set: {disable: !response.disable? true: false}})
    .then((user) => {
      res.status(200).json(user)
    })
  })
})

router.get('/sessions/all', isLoggedIn, (req, res, next) => {
  SessionFeedModel.find()
  .populate('loggedInUserId')
  .then((sessions)=>{
    res.status(200).json(sessions)
  });
});

module.exports = router;