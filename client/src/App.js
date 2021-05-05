import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Header from './components/Header';

import Home from './containers/Home';
import Login from './containers/Login';
import Register from './containers/Register';
import Checkout from './containers/Checkout';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/user';
import setAuthToken from './utils/setAuthToken';

import './App.css';

    if(localStorage.token) {
      setAuthToken(localStorage.token);
    }

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
        <Header />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
