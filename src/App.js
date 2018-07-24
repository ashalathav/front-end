import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import HomePage from "./containers/home-page/HomePage"
import AboutPage from "./containers/about-page/AboutPage"

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/about' component={AboutPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
