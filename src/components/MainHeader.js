

import React from 'react';

import { Link, Outlet } from 'react-router-dom';
import {Authenticator} from '@aws-amplify/ui-react';

const MainHeader = () => {
  return (
    <div className="App">
     
       <h1>Employee Pension </h1>
   || <Link className="btn btn-primary" to="/Create">Create Employee</Link> |
    
    <Link className="btn btn-primary" to="/Update">Update Employee</Link>  |
    <Link  className="btn btn-primary" to="/Delete">Delete Employee</Link>  |
    <Link className="btn btn-primary" to="/Search">Search </Link>  |
    <Link className="btn btn-primary" to="/GetList">Get List Employee</Link> |
    <Link className="btn btn-primary" to="/Export">Export Employee</Link>  ||
    <br></br>
    <br></br>
     
 
    <Link className="btn btn-primary" to="/CreatePension">Create Employee Pension Data</Link> |
    <Link className="btn btn-primary" to="/UpdatePension">Create Employee Pension Data</Link> |
    <Link  className="btn btn-primary" to="/DeletePension">Delete Employee Pension Data</Link>  |
    <Link className="btn btn-primary" to="/GetPensionList">Get Pension List </Link> |
    <Link className="btn btn-primary" to="/ExportPension">Export Pension Data</Link> ||
    <p>This task will help you to get all the employee data</p>
    <Outlet/>
       <Authenticator>
    {({ signOut, user }) => (
        <main>
          <h1>Hello If you want to sign out plase click on sign out Button</h1>
          <button onClick={signOut} className="btn btn-primary">Sign out</button>
        </main>
      )}
    </Authenticator>
   </div>
  );
};

export default MainHeader;
