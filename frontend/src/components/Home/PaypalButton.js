import React, { Component } from 'react';
import { PayPalButton } from "react-paypal-button-v2";
import axios from 'axios';
import {strapi} from '../functions'
export class PaypalButton extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     amount:this.props.data.amount
  //   }
  // }
  
  componentDidMount(){
    console.log(this.props.data)
  }

  test = () => {
    axios.post(`/api/save`).then(res=>{console.log(res.data)}).catch(err=>{console.log(err)})

  }
  render() {
    return (
      <PayPalButton
      
      // amount={this.props.data.amount}
      amount={this.props.data.amount}
      shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
      onSuccess={(details, data) => {
        alert("Transaction completed by " + details.payer.name.given_name);
        
        // OPTIONAL: Call your server to save the transaction
        console.log(data)
        const bundle ={
          data,
          props:this.props
          
        }
        console.log(this.props)
        axios(`/api/save`, {
          method: "post",
          headers:{
            'content-type':'application/json'
          },
          data:bundle
          
        }).then(res=>{console.log(res.data)}).catch(err=>{console.log(err.response.data.message)});
        // fetch("/api/save", {
        //     method: "post",
        //     body: JSON.stringify({
        //       orderID: data.orderID
        //     })
        //   });
      }}
      // onError={(details,data)=>{
      //   return console.log(this.props.data.amount)
      // }}
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
