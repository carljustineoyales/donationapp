import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import {strapi, getUserName} from '../functions'
import Navbar from './Navbar';
export class CreateCampaign extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      goalFund: '',
      author: {},
      reference: Math.floor(Math.random() * 31415926),
      username: '',
      images: {}

    }
    
  }

  handleChange = input => e => {
    
    if (e.target.type === 'file') {
      this.setState({
        images:e.target.files[0]
      })
      console.log(e.target.files[0])
    } 
    this.setState({[input]: e.target.value})
  }

  getUser = () => {
    axios.get(`${strapi}/users/?username=${getUserName()}`).then(res => {
      
      this.setState({
        author: {
          id: res.data[0].id
        },
        username: getUserName()
      })
      
      this.postCampaign();
    }).catch(err => {
      console.log(err)
    })

  }

  postCampaign = () => {
console.log('postCampaign')
const data = {
  'title':this.state.title,
  'description': this.state.description,
  'author': this.state.author,
  'reference':this.state.reference,
  'goal':this.state.goalFund,
  'verified':false,
  'deleted':false,
  'raised':0,
  'username':this.state.username
};
    // const data = this.state
    
    console.log(data)
    var bodyFormData = new FormData();
    
    bodyFormData.append('files.image',this.state.images, this.state.images.name)
    bodyFormData.append('data', JSON.stringify(data));
    console.log(data)

    axios({
      method: 'post',
      url: `${strapi}/campaigns`,
      data: bodyFormData,
      headers: {'Content-Type': 'multipart/form-data' }
      })
      .then(function (response) {
          //handle success
          console.log(response);
      })
      .catch(function (response) {
          //handle error
          console.log(response);
      });
    console.log(this.state)
  }

  onFormSubmit = (event) => {
    
    event.preventDefault();
  
    this.getUser();

  }

  render() {
    const {title, description, goalFund} = this.state
    const values = {
      title,
      description,
      goalFund
    }
    return (
      <Fragment>
        <Navbar/>
        <main>
          <div className='container'>
            <h1>Create A Campaign</h1>
            <form onSubmit={this.onFormSubmit}>
              <div className='form-row '>
                <div className="col-md-12 mb-3">
                  <label className='form-group w-100'>
                    <input
                      className='form-control form-control-sm'
                      type='text'
                      placeholder='Title'
                      onChange={this.handleChange('title')}
                      value={values.title}/>
                  </label>
                </div>

              </div>
              <div className='form-row'>
                <div className="col-md-12 mb-3">
                  <label className='form-group w-100'>
                    {/* <h6>Description:</h6> */}
                    <textarea
                      className="form-control form-control-sm"
                      placeholder='Description'
                      rows="12"
                      onChange={this.handleChange('description')}
                      value={values.description}></textarea>
                  </label>
                </div>

              </div>
              <div className='form-row'>
                <div className="col-md-12 mb-3">
                  <label className='form-group w-100'>
                    <input
                      type='number'
                      className="form-control form-control-sm"
                      placeholder='Funding Goal Amount'
                      onChange={this.handleChange('goalFund')}
                      value={values.goalFund}/>
                  </label>
                </div>

              </div>
              <div className='form-row'>
                <div className="col-md-12 mb-3">
                  <label className='form-group w-100'>
                    <input
                      type='file'
                      className="form-control form-control-sm"
                      onChange={this.handleChange('image')}
                      value={values.image}/>
                  </label>
                </div>

              </div>
              <div className='form-row '>
                <div className="col-md-9 mb-3">
                  <Link to="#">Need Help?</Link>
                </div>
                <div className="col-md-3">
                  <button className='btn btn-warning w-100'>Submit</button>
                </div>

              </div>
            </form>
          </div>

        </main>
      </Fragment>
    );
  }
}

export default CreateCampaign;