const express = require('express');
const router  = express.Router();

/* Albaranes,  */
router.put('/albaranes/all', (req, res, next) => {
  console.log(req.body)
});

module.exports = router;
