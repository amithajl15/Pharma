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
    alert("id"+mediid);

    axios.delete(`http://localhost:3001/delete/${mediid}`)
        .then(res => {
          console.log(res);
          console.log(res.data);
          const medi = res.data.data;
          if (res.status==200){
            alert("Product got Deleted !!");
          }
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
      updateHandler(){
        alert("update");
      }


  render() {
    return (
      <div>
      <form>
<ul>
       { this.state.medi.map(medi => <li class="borderlist">
       <br></br>
       ID: {medi.id} <br></br> Name : {medi.name}  <br></br> Type : {medi.type}
       <br></br>      Manufacturer: {medi.Manufacturer}  <br></br> Batch No : {medi.BatchNo} <br></br>
      Expiration Date: {medi.ExpirationDate} <br></br>  Price : {medi.Price}

<br></br>
  <button type="sumbit" onClick={this.updateHandler.bind(this,medi.id)}>Update</button>&nbsp;&nbsp;
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
