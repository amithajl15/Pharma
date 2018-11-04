import React, { Component } from 'react';
import axios from 'axios';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

class AddMedicine extends Component {
  constructor() {
   super();
   this.state = {
     id: "",name:'',brand:'',tab:'',
   }
this.inputChangeHandler=this.inputChangeHandler.bind(this);
this.idhandleChange=this.idhandleChange.bind(this);
this.nameshandleChange=this.nameshandleChange.bind(this);
this.brandhandleChange=this.brandhandleChange.bind(this);
this.tabhandleChange=this.tabhandleChange.bind(this);
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
    let name=this.state.name;
    name=event.target.value;

    this.setState({
      name
  });}
  brandhandleChange(event) {
      console.log("handbrand"+this.state.brand);
      let brand=this.state.brand;
      brand=event.target.value;

    this.setState({
      brand
    });
}
tabhandleChange(event) {
  //  console.log("handbrand"+this.brand.id);
    let tab=this.state.tab;
    tab=event.target.value;

  this.setState({
    tab
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
      alert("Added!!");
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
    addHandlerBut(){

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
          alert("Added!!");
        }
      // alert(res);

})
};

  addHandlesr(){
    console.log("addhan");
   let id=document.getElementsByName('id');
   console.log("id"+id);
 let name=document.getElementsByName('name');
 console.log("name"+name);
 let brand=document.getElementsByName('Brand');
 let data={
          "id": id,
          "name": name,
          "Brand": brand

      };
      console.log("data"+data);
    axios.post(`http://localhost:3001/add/${data}`)
        .then(res => {
          console.log(res);
          console.log(res.data);
          alert(res);

  })
  }
  render() {
    return (<div>
      <form action="/add" onSubmit={this.addHandlerBut()}>

   Tab Id: <input type="text" name="id" onChange={this.idhandleChange} value={this.state.id}></input><br/>

   Tab name: <input type="text" name="name" onChange={this.namehandleChange} value={this.state.name} ></input><br/>
    Tablet: <input type="text" name="tab" onChange={this.tabhandleChange} value={this.state.tab}></input><br/>
   Brand: <input list="brand" name="brand" onChange={this.brandhandleChange} value={this.state.brand} ></input>

  <datalist id="brand" onChange={this.brandhandleChange}>
    <option value="Tablet"/>
    <option value="Syrap"/>
    <option value="cream"/>
    <option value="other"/>
    </datalist>

    <button type="sumbit" onClick={this.meess} >Add</button>

</form>
      </div>



    );
  }};


  export default AddMedicine;
