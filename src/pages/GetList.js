import React, {useEffect, useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Employee } from '../models';

function GetList(props){
  const [employees,setPosts] = useState([])

  useEffect(()=>{
    const funct = async ()=>{
      const models = await DataStore.query(Employee);
      setPosts(models)
    }
    funct()
  },[])
 
const tableRows = employees.map((employee)=>{
 
return(
<tr className="text-white">
<td>{employee.empID}</td>
<td>{employee.employeename}</td>
<td>{employee.empTeam}</td>
<td>{employee.empPosition}</td>
<td>{employee.empDate}</td>
<td>{employee.pensionRetirement}</td>
<td>{employee.qualifiedNew}</td>
</tr>
);
});

  return(
    <div className="App">
    <h1>Get Employee Data</h1>
  
    <table className="table table-stripped">
      <thead className="text-white"  id='table-to-xls'>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Team</th>
          <th>Position</th>
          <th>Date</th>
          <th>Pension/Retirement</th>
          <th>Qualified/New</th>
        </tr>
      </thead>
      <tbody>
       {tableRows}
      </tbody>
      
    </table>
   
    </div>
  );
}
export default GetList;