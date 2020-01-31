const express = require('express');
const app = express();
const port = 5000;
var axios = require('axios');

app.get('/name',(req,res) => {
  const data = {
    username:'test',
    age:5
  };
  res.json(data);
});

app.post('/save',(req,res) => {
  console.log('Body:',req.body);
  res.json({
    msg:'request recieved',
    request:req.body
  });
  

  const {first_name,last_name,email,amount,donation_ref,anonymous,campaign} = req.body.props.data;

  const data = {
    name:first_name + ' ' +last_name,
    email:email,
    donation:amount,
    donation_ref:donation_ref,
    anonymous:anonymous,
    campaigns:{
      id:campaign
    }
  }
  axios.post('https://limitless-brushlands-81295.herokuapp.com/supporters',data
  )
  .then(res=>{
    console.log(data);
    console.log(res.data);
  })
  .catch(err=>{
    console.log(`Error: ${err.response.data.message}`);
  })

});

app.listen(port, () =>{console.log(`Server Started on port ${port}`)})