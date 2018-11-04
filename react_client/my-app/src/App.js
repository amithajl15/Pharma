import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import './App.css';
import AddMedicine from './components/AddMedicine';
import MedicineList from './components/MedicineList';

class App extends Component {
  constructor(){
    super();
    }
  state={
    isEditEnabled:false,

};

  render() {
    return (  <div className="Home">


  				<h1>
  					Pharmacy
  				</h1>
  				<p>
  					Welcome!!
  				</p>
<AddMedicine/>
{!this.state.isEditEnabled && <MedicineList/>}
            {this.props.children}

    </div>

    );
  }
}

export default App;
