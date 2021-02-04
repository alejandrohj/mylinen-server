const express = require('express');
const router  = express.Router();

const { isLoggedIn } = require('../helpers/auth-helper');

const OrderModel = require('../models/order.model');

/* GET home page */
router.get('/customer/orders', isLoggedIn, (req, res, next) => {
  const id= req.session.loggedInUser.complex;
  console.log(id)
  OrderModel.find({complexId: id})
  .populate('complexId')
  .populate('CreatedBy')
  .then((orders)=>{
    res.status(200).json(orders)
  })
});

router.post('/customer/neworder',isLoggedIn, (req, res, next) => {
  const {complexId, CreatedBy, status} = req.body;
  OrderModel.create({complexId, CreatedBy, status})
  .then((orders)=>{
    res.status(200).json(orders)
  })
});

router.get('/customer/order/:id', isLoggedIn, (req, res, next) => {
  OrderModel.findById(req.params.id)
  .populate('CreatedBy')
  .populate({
    path : 'complexId',
    populate : {
      path : 'linen.laundry'
    }
  })
  .then((order)=>{
    res.status(200).json(order)
  })
});

router.post('/customer/order/:id/edit',isLoggedIn, (req, res, next) => {
  const {status, linenOrdered,linenPendingToRewash,allLinenSendedToHotel,linenToRewash} = req.body;
  OrderModel.findByIdAndUpdate(req.params.id,{$set:{status,linenOrdered,linenPendingToRewash,allLinenSendedToHotel,linenToRewash}})
  .then((orders)=>{
    res.status(200).json(orders)
  })
});

module.exports = router;
