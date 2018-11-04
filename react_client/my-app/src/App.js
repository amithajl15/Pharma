import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import './App.css';
import NavBarComponent from './components/NavBarComponent';
import Show from './components/Show';

class App extends Component {
  render() {
    return (  <div className="Home">


  				<h1>
  					Pharmacy
  				</h1>
  				<p>
  					Welcome!!
  				</p>
<NavBarComponent/>
<Show/>
            {this.props.children}

    </div>

    );
  }
}

export default App;
