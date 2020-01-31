import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Dashboard from './components/pages/Dashboard';
import Home from './components/pages/Home';
import Feed from './components/Home/Feed';
import CreateCampaign from './components/Home/CreateCampaign';
import SingleCard from './components/pages/SingleCard';
import Profile from './components/pages/Profile';
import Donation from './components/pages/Donation';
import EditProfile from './components/pages/EditProfile';
import test from './components/test/test';

function App() {

  return (
<div>
    <Router >
      <Switch>
        <Route exact path="/test"                component={test          }/>
        <Route exact path="/"                    component={Home          }/>
        <Route       path="/dashboard/:username" component={Dashboard     }/>
        <Route       path="/feed"                component={Feed          }/>
        <Route       path="/create-campaign"     component={CreateCampaign}/>
        <Route       path="/campaign/:id"        component={SingleCard    }/>
        <Route       path="/review/campaign/:id" component={SingleCard    }/>
        <Route       path="/profile/:id"         component={Profile       }/>
        <Route       path="/profile-edit/:id"    component={EditProfile   }/>
        <Route       path="/donation/:id"        component={Donation      }/>
      </Switch>
      </Router>
</div>
  );
}

export default App;
