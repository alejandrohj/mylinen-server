const express = require('express');
const router = express.Router();

const ComplexModel = require('../models/complex.model');

router.post('/complex/create',(req,res)=>{
  console.log('complex')
  const {name,adress,linen, services} = req.body;
  console.log(name)
  ComplexModel.create({name, adress, linen, services})
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

router.get('/complexes',(req,res)=>{
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

module.exports = router;