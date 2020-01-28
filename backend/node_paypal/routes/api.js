var express = require('express');
var router = express.Router();

router.get('/name',(req,res) => {
  const data = {
    username:'test',
    age:5
  };
  res.json(data);
});

router.post('/save',(req,res) => {
  console.log('Body:',req.body);
  res.json({
    msg:'we recieve data'
  });
});

module.exports = router