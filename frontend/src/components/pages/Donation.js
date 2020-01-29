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
      amount: 1,
      campaign: this.props.match.params.id,
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

  // componentDidMount(){
  //   this.paypal();
  // }

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

  // paypal = () => {
  //   // axios.post('http://localhost:4000/pay',{},
  //   // {countValue: 1}).then(res=>{console.log(res.data)}).catch(err=>{console.log(err)})
  //   const payload = {
  //     name: this.state.campaign,
  //     price: this.state.amount,
  //     amount:  this.state.amount,
  //     first_name:  this.state.first_name,
  //     last_name:  this.state.last_name,
  //     email:  this.state.email,
  //   }
  //   axios({
  //     method:"POST",
  //     url:'/api/pay',
  //     data:payload
  //   }).then(res=>{console.log(res.data)}).catch(err=>{console.log(err)})
  // }



  render() {

    return (

      <Fragment>
        <Navbar/>
        <main>
          <div className='container'>
            <Link className='mb-3' to={`/campaign/${this.props.match.params.id}`} style={{display:'block'}}> Go back</Link>
            <form onSubmit={this.handleOnSubmit}>
            {/* <form action='http://localhost:4000/pay' method='post'> */}
            <div className='row'>
            <div className='col-sm-6'>
            
            <div className='col-sm-12 mb-3'>
            <h4>First Name</h4>
            <input
              type='text'
              name='first_name'
              className='form-control'
              placeholder='First Name'
              onChange={this.handleOnChange}/>
            </div>
            
            
            <div className='col-sm-12 mb-3'>
            <h4>Last Name</h4>
            <input
              type='text'
              name='last_name'
              className='form-control'
              placeholder='Last Name'
              onChange={this.handleOnChange}/>
            </div>
         
          
            <div className='col-sm-12 mb-3'>
            <h4>Email</h4>
            <input
              type='text'
              name='email'
              className='form-control'
              placeholder='Email Name'
              onChange={this.handleOnChange}/>
            </div>
            
            <div className='col-sm-12 mb-3'>
            <h4>Donate Amount</h4>
            <input
              type='number'
              name='amount'
              value={this.state.amount}
              className='form-control'
              placeholder='Amount'
              onChange={this.handleOnChange}/>
            </div>
          
            <div className='col-sm-12 mb-3'>
            <input type='checkbox' name='anonymous'  onClick={this.handleOnClick}/>
            <label htmlFor='anonymous'>Hide name from everyone except for the admin</label>
            </div>
          </div>
         
          <div className='col-sm-6'>
          
            <div className='col-sm-12 mb-3'>
            <h4>Paypal</h4>
            <PaypalButton data={this.state}/>
            </div>
          </div>
            </div>
            
         
            
            </form>
            
          </div>
          
        </main>
      </Fragment>
    );
  }
}

export default Donation;
