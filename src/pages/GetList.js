import React, {useEffect, useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Employee } from '../models';
function GetList(props){
  const [posts, setPosts] = useState()
  useEffect(()=>{
    const func = async() => {
      const models = await DataStore.query(Employee);
      setPosts(models);
      console.log(models);
    }
   func()
  },[])
  return(
    <div className="App">
    <h1>In GetList Employee Page </h1>
    <table className="table table-striped table-dark">
      <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Position</td>
        <td>Department</td>
      </tr>
        {
          posts.map(post => <tr>{post.empid}</tr> )
        }
    </table>
    
    </div>
  );
}
export default GetList;