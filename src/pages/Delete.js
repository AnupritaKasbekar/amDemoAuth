import React from 'react';
/*{useEffect, useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Employee } from '../models';*/
import { Component } from 'react';

class Delete extends Component{
   constructor(props)  {
        super(props);
        this.state = {
          
            pensionHolder:'' ,
            empid:'',
            empName:'',
            position:'',
            team:'',
            joindate:'',
            totalworkdays:'',
            avgannualsal:'',
            avgsalthrmonth:'',
            currentmonthpension:''
        };
       
      }
     
      /*--------------------Handle property-------------------------------*/
 
    
      handleTopicChange = event => {
        this.setState({
          pensionHolder: event.target.value
         
         })
      }
     
      handleSubmit = event  =>{
        alert(`${this.state.empid} ${this.state.empName} ${this.state.position} ${this.state.team} ${this.state.joindate} ${this.state.avgannualsal} ${this.state.totalworkdays}`);
       
        event.preventDefault();
      }
      handleIdChange = event =>{
        this.setState({
          empid:event.target.value
        })
      }
      handleNameChange = event =>{
        this.setState({
          empName:event.target.value
        })
      }
      handlePositionChange = event =>{
        this.setState({
          position:event.target.value
        })
      }
      handleTeamChange =event =>{
        this.setState({
          team:event.target.value
        })
      }
      handleJoinDateChange = event =>{
        this.setState({
          joindate:event.target.value
        })
      }
      handleworkdayChange = event =>{
        this.setState({
          totalworkdays:event.target.value
        })
      }
      handleavgannualsalChange =event =>{
        this.setState({
          avgannualsal:event.target.value
        })
      }
      handleavgsalthrmonthChange = event =>{
        this.setState({
          avgsalthrmonth:event.target.value
        })
      }
      handlecurrentmonthpensionChange = event =>{
        this.setState({
          currentmonthpension:event.target.value
        })
      }
        /*--------------------Handle property section end-------------------------------*/
      render() {
        return (
           
          <form onSubmit={this.handleSubmit}>
              <div> 
                
              <h1 className="text-center">Create Employee</h1>
              <label  className="form-label">Enter Employee ID</label>
              <input type="text" value={this.state.empid} onChange={this.handleIdChange}  className="form-control" placeholder="123"/>
              <label className="form-label">Enter Employee Name</label>
              <input type="text" value={this.state.empName} onChange={this.handleNameChange} className="form-control" placeholder="Jack"/>
              <label for="position" class="form-label">Enter Employee Position</label>
              <input type="text" value={this.state.position} onChange={this.handlePositionChange}  className="form-control" placeholder="회장"/>
              <label for="team" class="form-label">Enter Employee Team Name</label>
              <input type="text" value={this.state.team} onChange={this.handleTeamChange}  className="form-control" placeholder="임원 (서울)"/>
              <label for="joindate" class="form-label">Enter Employee Join Date</label>
              <input type="Date" value={this.state.joindate} onChange={this.handleJoinDateChange}  className="form-control" placeholder=""/>
              <label for="avgannualsal" class="form-label">Avarage Annual Salary</label>
              <input type="text" value={this.state.avgannualsal} onChange={this.handleavgannualsalChange}  className="form-control" placeholder=""/>
              <label for="avgsalthrmonth" class="form-label">Avarage Annual 3 month Salary</label>
              <input type="text" value={this.state.avgsalthrmonth} onChange={this.handleavgsalthrmonthChange}  className="form-control" placeholder=""/>
              <label for="currentmonthpension" class="form-label">Monthly Pension</label>
              <input type="text" value={this.state.currentmonthpension} onChange={this.handlecurrentmonthpensionChange}  className="form-control" placeholder=""/>
              <label for="totalworkdays" class="form-label">No. Of Work Days</label>
              <input type="text" value={this.state.totalworkdays} onChange={this.handleworkdayChange}  className="form-control" placeholder=""/>
             
              <label>Pension Holder</label>
              <select value={this.state.pensionHolder} onChange={this.handleTopicChange}>
                <option value="no">Yes</option>
                <option value="yes">No</option>
              </select>
              </div>



            <button>Submit</button>
           
          </form>
        );
      }
}
/*function Create(props){
 
  const createPost = async() => {
    const post = {
        empid: 211042,
        empName: "김영삼",
        position: "이사대우",
        joindate: "2002-11-04",
        totalworkdays: 273,
        avgannualsal: 5870284,
        avgsalthrmonth: 6572253,
        currentmonthpension: 652254,
        Year2018: 0,
        Year2019: 5390510,
        Year2020: 6083860,
        Year2021Nov: 6025711,
        totalPension: 17833081,
        pensionHolder: true,
        team: "PILOT실(연구)"
      
    }
    const newPost = await DataStore.save(
      new Employee(post)
    )
    console.log(newPost);
    
  }  
  return(
    <div>
    <h1 className="text-center">In Create Employee Page </h1>
    <div className="container">
    <div className="row">
      <div className="col">
        <form>
        <label for="empid" class="form-label">Enter Employee ID</label>
       <input type="text" id="empid" class="form-control" placeholder="123"/>
       <label for="empname" class="form-label">Enter Employee Name</label>
       <input type="text" id="empname" class="form-control" placeholder="Jack"/>
       <label for="empposition" class="form-label">Enter Employee Position</label>
       <input type="text" id="empposition" class="form-control" placeholder="회장"/>
       <label for="empteam" class="form-label">Enter Employee Team Name</label>
       <input type="text" id="empteam" class="form-control" placeholder="임원 (서울)"/>
       <label for="joindate" class="form-label">Enter Employee Join Date</label>
       <input type="Date" id="joindate" class="form-control" placeholder=""/>
       <label for="workday" class="form-label">No. Of Work Days</label>
       <input type="text" id="workday" class="form-control" placeholder=""/>
       <label for="avgannualsal" class="form-label">Avg. Annual Salary</label>
       <input type="text" id="avgannualsal" class="form-control" placeholder=""/>
       <label for="avgthrmonsal" class="form-label">Avg. 3 month Salary</label>
       <input type="text" id="avgthrmonsal" class="form-control" placeholder=""/>
       <label for="pensionmon" class="form-label">Current Month Pension</label>
       <input type="text" id="pensionmon" class="form-control" placeholder=""/>
       <label for="pensionholder" class="form-label">Pension Holder</label>
       <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
        <label class="form-check-label" for="flexRadioDefault2">
          Yes
        </label>
          </div>
          <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
          <label class="form-check-label" for="flexRadioDefault1">
           No
            </label>
          </div>
       <button className="btn btn-primary text-center" onClick={createPost}> Create Employee</button>
        </form>
      </div>
    </div>
    </div>
   
  
    </div>
  );
}*/

export default Delete;

