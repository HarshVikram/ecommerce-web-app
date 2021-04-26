import React, { useEffect } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Login from './containers/Login';
import Register from './containers/Register';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        hello
      </div>
      <Switch>
        <Route exact path="/register" component={Landing} />
        <Route exact path="/login" component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;
