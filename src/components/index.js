import React, { Component } from 'react';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Nav from './Nav';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <Dashboard/>
      </div>
    )
  }
}

export default App; 

