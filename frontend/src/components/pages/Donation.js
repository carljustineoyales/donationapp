import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../Home/Navbar'
import axios from 'axios'
import {strapi} from '../functions'
import qs from 'query-string'
import PaypalButton from '../Home/PaypalButton';

export class Donation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      anonymous: false,
      amount: '',
      campaign: this.props.match.params.campaign,
      donation_ref: 'donation' + Math.floor(Math.random() * 31415926),
      error: '',
      access_token: ''
    }

    this.handleOnSubmit = this
      .handleOnSubmit
      .bind(this)
    this.handleOnChange = this
      .handleOnChange
      .bind(this)
    this.handleOnClick = this
      .handleOnClick
      .bind(this)
  }

  componentDidMount(){
    this.paypal();
  }

  handleOnSubmit = event => {
    event.preventDefault();
    // console.log(this.state)
    this.paypal();

  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleOnClick = event => {
    this.setState({
      anonymous: !this.state.anonymous
    })
  }

  paypal = () => {
    
  }


  render() {

    return (

      <Fragment>
        <Navbar/>
        <main>
          <div className='container'>
            <Link to={`/campaign/${this.props.match.params.campaign}`}>Go back</Link>
            {/* <form onSubmit={this.handleOnSubmit}> */}
            <form action='http://localhost:4000/pay' method='post'>
              <input
                type='text'
                name='first_name'
                placeholder='First Name'
                onChange={this.handleOnChange}/>
              <input
                type='text'
                name='last_name'
                placeholder='Last Name'
                onChange={this.handleOnChange}/><br/>
              <input type='checkbox' name='anonymous' onClick={this.handleOnClick}/>
              <label htmlFor='anonymous'>Hide name from everyone except for the admin</label><br/>
              <input
                type='text'
                name='email'
                placeholder='Email Name'
                onChange={this.handleOnChange}/><br/>
              <input
                type='number'
                name='amount'
                placeholder='Amount'
                onChange={this.handleOnChange}/><br/>
              <button type='submit'>Submit</button>
            </form>
            <PaypalButton/>
          </div>
          
        </main>
      </Fragment>
    );
  }
}

export default Donation;
