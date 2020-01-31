import React, {Component} from 'react';
import CardList from './CardList';

import Navbar from './Navbar';

export class Feed extends Component {
  componentDidMount(){
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
      <Navbar/>
      <main>
        <div className='container'>
            <CardList/>
        </div>
        </main>
      </div>

    );
  }
}

export default Feed;
