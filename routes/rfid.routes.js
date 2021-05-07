const express = require('express');
const router  = express.Router();

const axios = require('axios');


/* GET home page */
router.put('/albaranes', (req, res, next) => {
  const {sqlquery} = req.body;
  console.log(sqlquery);
  axios.put(`https://smartlinen.loca.lt/sqlquery`,{sqlquery: sqlquery},{withCredentials: true})
  .then((response)=>{
    res.status(200).json(response.data);
  })
  
});

router.get(`/albaran/:id`,(req,res) =>{
  const id = req.params.id;
  axios.get(`https://smartlinen.loca.lt/albaran/${id}`,{withCredentials: true})
  .then((response)=>{
    res.status(200).json(response.data);
})
})


module.exports = router;
