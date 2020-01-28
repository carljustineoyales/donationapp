import React, {Component} from 'react';
import CardList from './CardList';

import Navbar from './Navbar';

export class Feed extends Component {
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
