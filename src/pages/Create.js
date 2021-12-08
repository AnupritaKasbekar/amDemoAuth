import React, {useEffect, useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Employee } from '../models';
function Create(props){
  /*const [posts, setPosts] = useState()
  useEffect(()=>{
    const func = async() => {
      const models = await DataStore.query(Employee);
      setPosts(models);
      console.log(models);
    }
   func()
  },[])*/
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
}
export default Create;