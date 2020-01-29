// var express = require('express');
// var router = express.Router();

// router.get('/name',(req,res) => {
//   const data = {
//     username:'test',
//     age:5
//   };
//   res.json(data);
// });

// router.post('/save',(req,res) => {
//   console.log('Body:',req.body);
//   res.json({
//     msg:'we recieve data'
//   });
// });

const express = require('express');
var router = express.Router();
var axios = require('axios')
// const app = express();

// app.set('view engine','ejs');

// app.get('/',(req,res)=> res.render('index'));
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
    msg:'request recieved',
    request:req.body
  });
  
  const data = {
    name:req.body.props.data.name,
    email:req.body.props.data.email,
    donation:req.body.props.data.amount,
    donation_ref:req.body.props.data.donation_ref,
    anonymous:req.body.props.data.anonymous,
    campaigns:{
      id:req.body.props.data.campaign
    }
  }
  axios.post('http://localhost:1337/supporters',data
  ).then(res=>{console.log(res.data)}).catch(err=>{console.log(err.response.data.message)})

});



module.exports = router