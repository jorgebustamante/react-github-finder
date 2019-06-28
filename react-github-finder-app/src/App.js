import React, { Fragment, useState, } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/Pages/About';
// import axios from 'axios';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {
  // const [users, setUsers] = useState([]);
  // const [user, setUser] = useState({});
  // const [repos, setRepos] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [alert, setAlert] = useState(null);


  

  return (
    <GithubState>
      <AlertState>

      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Search
                    //  setAlert={showAlert} 
                     />
                    <Users />
                  </Fragment>
                )}
              />
              <Route
                exact
                path='/user/:login'
                // render={props => (
                //   <User
                //     {...props}
                //     // getUser={getUser}
                //     // getUserRepos={getUserRepos}
                //     // user={user}
                //     // repos={repos}
                //     // loading={loading}
                //   />
                // )}
                component={User}
              />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </div>
      </Router>
      </AlertState>

    </GithubState>
  );
};

export default App;
