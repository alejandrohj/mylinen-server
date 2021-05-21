const express = require('express');
const router = express.Router();

const ComplexModel = require('../models/complex.model');


const { isLoggedIn } = require('../helpers/auth-helper');

router.post('/complex/create',isLoggedIn,(req,res)=>{
  console.log('complex')
  const {name,adress,linen, services,rfidId, typeOfQuote,klgPrice} = req.body;
  console.log(rfidId)
  ComplexModel.create({name, adress, linen, services,rfidId, typeOfQuote,klgPrice})
    .then((complex)=>{
      res.status(200).json(complex)
    }).catch((err) => {
      res.status(500).json({
        error: 'Cannot update complex',
        message: err
      })
      return;
    });
})

router.get('/complexes',isLoggedIn,(req,res)=>{
  ComplexModel.find()
    .then((complexes)=>{
      res.status(200).json(complexes)
    }).catch((err) => {
      res.status(500).json({
        error: 'Cannot update complex',
        message: err
      })
      return;
    });
})

router.get('/complex/:id/details',isLoggedIn,(req,res)=>{
  console.log('gettin complex')
  ComplexModel.findById(req.params.id)
  .populate({
    path:'linen.laundry'
  })
    .then((complex)=>{
      res.status(200).json(complex)
    })
})

router.get('/complex/:id/details/byrfidid',isLoggedIn,(req,res)=>{
  console.log('gettin complex')
  ComplexModel.find({rfidId:req.params.id})
  .populate({
    path:'linen.laundry'
  })
    .then((complex)=>{
      res.status(200).json(complex)
    })
})

router.post('/complex/:id/updatelinen',isLoggedIn,(req,res)=>{
  const {linen} = req.body;
  ComplexModel.findByIdAndUpdate(req.params.id,{$set:{linen:linen}})
    .then((complex)=>{
      res.status(200).json(complex)
    })
})



module.exports = router;