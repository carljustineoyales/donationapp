import React, { Component } from 'react';
import Navbar from '../Home/Navbar'
import {getUserName} from '../functions'
// import { Redirect } from 'react-router-dom';

import CampaignTable from '../dashboard/CampaignTable'
export class Dashboard extends Component {
  render() {
    const username = getUserName();
    
      return (
        <div>
        <Navbar />
          <main>
            <div className='container'>
            <h2>{username}</h2>
          <CampaignTable />
            </div>
          </main>          
        </div>
      );
   
    
  }
}

export default Dashboard;
