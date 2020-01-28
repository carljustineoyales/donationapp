const express = require('express');
const ejs = require('ejs');
const paypal = require('paypal-rest-sdk')

paypal.configure({
  'mode':'sandbox',
  'client_id':'AS6JEMGNuFRUZWDJuUY4oAhyiX09neZKjhHV8XODfrSWfyDkVWEV8s0PedFQ-8Q9i8OpjJmJ-AlDsQlv',
  'client_secret':'EGo9uEAPFymRKljEPKnd91mDw9-cue2WDlTDhgmVOfYgESXR1imoAfTmwR4dl3FIaQqnym8R46l4brKn'
});

const app = express();

// app.set('view engine','ejs');

// app.get('/',(req,res)=> res.render('index'));

app.post('/pay',(req,res)=>{
  const create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "http://localhost:3000/feed",
        "cancel_url": "/cancel"
    },
    "transactions": [{
        "item_list": {
            "items": [{
                "name": "item",
                "sku": "item",
                "price": "1.00",
                "currency": "USD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "USD",
            "total": "1.00"
        },
        "description": "This is the payment description."
    }]
};

paypal.payment.create(create_payment_json, function (error, payment) {
  if (error) {
      throw error;
  } else {
      for(let i = 0 ;i<payment.links.length;i++){
        if(payment.links[i].rel === 'approval_url'){
          res.redirect(payment.links[i].href);
        }
      }
  }
});

});

app.get('/success',(req,res) => {
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;

  const execute_payment_json = {
    "payer_id": payerId,
    "transactions": [{
        "amount": {
            "currency": "USD",
            "total": "1.00"
        }
    }]
};
paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
  if (error) {
      console.log(error.response);
      throw error;
  } else {
     
      console.log(JSON.stringify(payment));
      res.send('success')
  }
});

});

app.get('/cancel', (req,res) => res.send('canceled'));



app.listen(4000, ()=>{console.log('server started')});