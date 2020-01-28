import React, { Component } from 'react';
import { PayPalButton } from "react-paypal-button-v2";
import axios from 'axios';
import {strapi} from '../functions'
export class PaypalButton extends Component {
  test = () => {
    axios.get(`${strapi}/feed`).then(res=>{console.log(res.data)}).catch(err=>{console.log(err)})

  }
  render() {
    return (
      <PayPalButton
      amount="25.00"
      shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
      onSuccess={(details, data) => {
        alert("Transaction completed by " + details.payer.name.given_name);
       
        // OPTIONAL: Call your server to save the transaction
        console.log(data)
        this.test()
        // axios(`http://localhost:3000/`, {
        //   method: "post",
        //   body: JSON.stringify({
        //     orderID: data.orderID
        //   })
        // }).then(res=>{console.log(res.data)}).catch(err=>{console.log(err.response.data.message)});
      }}
      //Live
      // options={{
      //   clientId:'AR-jE0wPMfdmAfZU764-f3N5oIRZtA5ZZt7r6jOuhVvOk3YbE2TkN6h-NWikJZIV26do7GlJ2nOiWHMS'
      // }}
      //SB
      options={{
        clientId:'AS6JEMGNuFRUZWDJuUY4oAhyiX09neZKjhHV8XODfrSWfyDkVWEV8s0PedFQ-8Q9i8OpjJmJ-AlDsQlv'
      }}
    />
    );
  }
}

export default PaypalButton;
