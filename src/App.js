import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Details from './pages/details';
import Homepage from './pages/home';
import Landing from './pages/landing';
import Login from './pages/login';
import Playing from './pages/playing';
import Previous from './pages/previous';
import Profile from './pages/profile';
import Register from './pages/register';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />,
          <Route exact path="/login" component={Login} />,
          <Route exact path="/register" component={Register} />,
          <Route exact path="/landing" component={Landing} />,
          <Route exact path="/profile" component={Profile} />,
          <Route exact path="/details" component={Details} />,
          <Route exact path="/playing" component={Playing} />,
          <Route exact path="/previous" component={Previous} />,
        </Switch>
      </div>
    );
  }
}

export default App;
