const express = require('express');
const router = express.Router();

const ComplexModel = require('../models/complex.model');

router.post('/complex/create',(req,res)=>{
  const {name,adress,linen, services} = req.body;
})