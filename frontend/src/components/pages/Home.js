import React, {Component, Fragment} from 'react';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';

import UserForm from './UserForm';
import Feed from '../Home/Feed';
import {withToken} from '../functions'
import About from '../Home/About';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    }
  }

  render() {
    if (withToken()) {
      return (
        <div>
<Feed/>
        </div>
      );

    } else {
      return (
        <Fragment>
          <Navbar/>
          <main>
            <div className='container'>
              <div className="row">
                <div className='col-sm'><About/></div>
                <div className='col-sm'><UserForm/></div>
              </div>
            </div>
          </main>
          <Footer/>

        </Fragment>
      );
    }
  }
}

export default Home;
