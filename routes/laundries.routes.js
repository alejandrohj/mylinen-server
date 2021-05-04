const express = require('express');
const router  = express.Router();

const LaundryModel = require('../models/laundry.model');

const { isLoggedIn } = require('../helpers/auth-helper');

/* GET home page */
router.get('/laundries',isLoggedIn, (req, res, next) => {
  LaundryModel.find()
    .then((laundries)=>{
      res.status(200).json(laundries);
    })
});

router.post('/laundry/create',isLoggedIn, (req, res, next) => {
  const {name, code, rfidId} = req.body;
  LaundryModel.create({name, code, rfidId})
    .then((laundries)=>{
      res.status(200).json(laundries);
    })
});

router.post('/laundry/:id/update',isLoggedIn, (req, res, next) => {
  const {name, code} = req.body;
  LaundryModel.findByIdAndUpdate(req.params.id,{$set:{name, code}})
    .then((laundries)=>{
      res.status(200).json(laundries);
    })
});

module.exports = router;