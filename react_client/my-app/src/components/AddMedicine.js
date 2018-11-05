import React, { Component } from 'react';
import axios from 'axios';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

class AddMedicine extends Component {
  constructor() {
   super();
   this.state = {
     id: "",names:'',brand:'',man:'',bat:'',ed:'',price:'',
   }

this.idhandleChange=this.idhandleChange.bind(this);
this.nameshandleChange=this.nameshandleChange.bind(this);
this.brandhandleChange=this.brandhandleChange.bind(this);
this.manhandleChange=this.manhandleChange.bind(this);
this.bathandleChange=this.bathandleChange.bind(this);
this.edhandleChange=this.edhandleChange.bind(this);
this.pricehandleChange=this.pricehandleChange.bind(this);
this.addHandler=this.addHandler.bind(this);

  }



  idhandleChange(event) {
      console.log("handid"+this.state.id);
      let id=this.state.id;
      id=event.target.value;

    this.setState({
      id
    });
  }
  nameshandleChange(event){
    console.log("namehand");
    let names=this.state.names;
    names=event.target.value;

    this.setState({
      names
  });}
  brandhandleChange(event) {
      console.log("handbrand"+this.state.brand);
      let brand=this.state.brand;
      brand=event.target.value;

    this.setState({
      brand
    });
}
manhandleChange(event) {
  //  console.log("handbrand"+this.brand.id);
    let man=this.state.man;
    man=event.target.value;

  this.setState({
    man
  });
}
bathandleChange(event) {
    console.log("handid"+this.state.bat);
    let bat=this.state.bat;
    bat=event.target.value;

  this.setState({
    bat
  });
}

edhandleChange(event) {
    console.log("handid"+this.state.ed);
    let ed=this.state.ed;
    ed=event.target.value;

  this.setState({
    ed
  });
}
pricehandleChange(event) {

    let price=this.state.price;
    price=event.target.value;

  this.setState({
    price
  });
}

meess(){
  alert("hello");
  console.log("inside add");
  const id=this.state.id;
  const name=this.state.tab;
  const brand=this.state.brand;
  console.log("addid"+id+brand);



  axios.post(`http://localhost:3001/add/${id}/${name}/${brand}`)
  .then(res => {
    console.log(res);
    console.log(res);
    console.log(res.data);

    if (res.status==200){
      alert("Product got Added!!");
    }
  // alert(res);

  })

//  console.log("logid"+this.state.id);
}
  componentDidMount() {
    console.log("1");
  }
    inputChangeHandler(e) {
     let formFields = {...this.state.formFields};
     formFields[e.target.name] = e.target.value;
     this.setState({
      formFields
     });
    }
    addHandler(){
alert("hi"+this.state.names);
      console.log("inside add");
      const id=this.state.id;
      const names=this.state.names;
      const brand=this.state.brand;
      const man=this.state.man;
      const bat=this.state.bat;
      const ed=this.state.ed;
      const price=this.state.price;
  console.log("addid"+id+brand);


alert(price);
  axios.post(`http://localhost:3001/add/${id}/${names}/${brand}/${man}/${bat}/${ed}/${price}`)
      .then(res => {
        console.log(res);
        console.log(res);
        console.log(res.data);

        if (res.status==200){
          alert("Added!!");
        }
      // alert(res);

})
};


  render() {
    return (<div>
      <form action="/add" >

   ID: <input type="text" name="id" onChange={this.idhandleChange} value={this.state.id}></input><br/>
   Name: <input type="text" name="names" onChange={this.nameshandleChange} value={this.state.names} ></input><br/>
    Manufacture: <input type="text" name="man" onChange={this.manhandleChange} value={this.state.man}></input><br/>
   Type: <input list="brand" name="brand" onChange={this.brandhandleChange} value={this.state.brand} ></input>
   <datalist id="brand" onChange={this.brandhandleChange}>
    <option value="Tablet"/>
    <option value="Syrap"/>
    <option value="cream"/>
    <option value="other"/>
    </datalist>
     BatchNo: <input type="text" name="bat" onChange={this.bathandleChange} value={this.state.bat}></input><br/>
     Expiration Date: <input type="date" name="ed" onChange={this.edhandleChange} value={this.state.ed}></input><br/>
      Price: <input type="price" name="price" onChange={this.pricehandleChange} value={this.state.price}></input><br/>
    <button type="sumbit" onClick={this.addHandler} >Add</button>

</form>
      </div>



    );
  }};


  export default AddMedicine;
