import React from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Employee } from '../models';
/*import { render } from 'react-dom';*/
import { Component } from 'react';



import awsconfig from '../aws-exports';
import Amplify from '@aws-amplify/core';

Amplify.configure(awsconfig);

class Create extends Component{
  constructor(props)  {
    super(props);
    this.state = {
      empID:'',
      employeename:'',
      empTeam:'',
      empPosition:'',
      empDate:'',
      pensionRetirement: '',
      qualifiedNew:'',
     
    };
  }


  handleSubmit = async(event)  =>{
    alert(`${this.state.empID} ${this.state.employeename} ${this.state.empTeam} ${this.state.empDate} ${this.state.empPosition} ${this.state.pensionRetirement} ${this.state.qualifiedNew}`);
  const newPost = await DataStore.save(
      new Employee({
        empID: Number(this.state.empID),
        employeename:this.state.employeename,
        empTeam:this.state.empTeam,
        empPosition:this.state.empPosition,
        empDate:this.state.empDate,
        pensionRetirement:this.state.pensionRetirement,
        qualifiedNew:this.state.qualifiedNew,
      })
      
    );
    console.log(newPost);
    event.preventDefault();
  }
  handleIdChange = event =>{
    this.setState({
      empID:event.target.value
    })
  }
  handleNameChange = event =>{
    this.setState({
      employeename:event.target.value
    })
  }
  handlePositionChange = event =>{
    this.setState({
      empPosition:event.target.value
    })
  }
  handleTeamChange =event =>{
    this.setState({
      empTeam:event.target.value
    })
  }

  handleJoinDateChange = event =>{
    this.setState({
      empDate:event.target.value
    })
  }
  handlepensionRetirementChange =event =>{
    this.setState({
      pensionRetirement:event.target.value
    })
  }
  handlequalifiedNewChange = event =>{
    this.setState({
      qualifiedNew:event.target.value
    })
  }
  /*handleworkdayChange = event =>{
    this.setState({
      totalworkdays:event.target.value
    })
  }

  handlePensionChange = event =>{
    this.setState({
      pensionHolder:event.target.value
    })
  }*/
  

  /*===========================handle property end======================== */
  render() {
    return (
       
      <form onSubmit={this.handleSubmit}>
          <div> 
            
          <h1 className="text-center">Create Employee</h1>
          <label  className="form-label">Enter Employee ID</label>
          <input type="text" value={this.state.empID} onChange={this.handleIdChange}  className="form-control" placeholder="123"/>

          <label className="form-label">Enter Employee Name</label>
          <input type="text" value={this.state.employeename} onChange={this.handleNameChange} className="form-control" placeholder="Jack"/>

          <label className="form-label">Enter Employee Team Name</label>
          <input type="text" value={this.state.empTeam} onChange={this.handleTeamChange}  className="form-control" placeholder="임원 (서울)"/>

          <label className="form-label">Enter Employee Position</label>
          <input type="text" value={this.state.empPosition} onChange={this.handlePositionChange}  className="form-control" placeholder="회장"/>

        
              
          <label className="form-label">Enter Employee Join Date</label>
          <input type="Date" value={this.state.empDate} onChange={this.handleJoinDateChange}  className="form-control" placeholder=""/>
              
          <label className="form-label">Pension /Retirement</label>
          <input type="text" value={this.state.pensionRetirement} onChange={this.handlepensionRetirementChange}  className="form-control" placeholder=""/>
   
          <label className="form-label">qualified / New</label>
          <input type="text" value={this.state.qualifiedNew} onChange={this.handlequalifiedNewChange}  className="form-control" placeholder=""/>

        
          </div>     
          <button className="btn btn-primary">Submit</button>

          
        </form>
    )
}
}
export default Create;