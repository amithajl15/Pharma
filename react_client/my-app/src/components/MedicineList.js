import React, { Component } from 'react';
import axios from 'axios';

import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

//class Show extends Component {


export default class MedicineList extends React.Component{
  state = {
    medi: [],
  }

  deleteHandler(mediid){
    console.log("mediid"+this.state.medi.id);
    console.log("id"+this.state.id);

    axios.delete(`http://localhost:3001/delete/${mediid}`)
        .then(res => {
          console.log(res);
          console.log(res.data);
          const medi = res.data.data;
       this.setState({ medi });
  })
  }
;
  componentDidMount() {
    console.log("1");
    axios.get(`http://localhost:3001`)
      .then(res => {
        const medi = res.data.data;
        this.setState({ medi });
//const posts = res.data.children.map(obj => obj.data);
//const posts = res.data.children.map(obj=>obj.data);
      //  this.setState({ posts });

        console.log(res.data);
       console.log("medi"+medi);
      })
      .catch(e=>{
        console.log(e);
      });
  }

  render() {
    return (
      <div>
      <form>
<ul>
       { this.state.medi.map(medi => <li>ID: {medi.id}   Name : {medi.name} Brand : {medi.Brand}
      <br></br>   <a href="/update">Update</a> &nbsp;

    <button type="sumbit" onClick={this.deleteHandler.bind(this,medi.id)}>Delete</button>
<br></br>
         </li> )}
<br></br>
     </ul>
     </form>
     </div>
    );
  }};


  //export default Show;
