// App.js

import React from 'react';
import DataTable from './components/DataTable';
import DataShowTable from './components/DataShowTable';

const data = [
  {
    grid: 1,
    name: 'kishan',
    email: 'kishan@gmail.com',
    password: 'kishan@123',
    course: ["html", "css", "bootstrap", "js"],
    city: "surat"
  },
  {
    grid: 2,
    name: 'jay',
    email: 'jay@gmail.com',
    password: 'kishan@123',
    course: ["photosho", "figma", "illustrator", "adobe xd"],
    city: "rajkot"
  },
  {
    grid: 3,
    name: 'ajay',
    email: 'ajay@gmail.com',
    password: 'ajay@123',
    course: ["html", "css", "bootstrap", "nodejs"],
    city: "amareli"
  },
  {
    grid: 4,
    name: 'nisha',
    email: 'nisha@gmail.com',
    password: 'nisha@123',
    course: ["html", "css", "bootstrap", "python"],
    city: "vadodara"
  }

];

const App = () => {
  return (
    <>
      <center>
     
          <h1 style={{textAlign :'center'}}>Function Table</h1>
          <DataTable data={data} />

          <br></br>
          <br></br>
          <br></br>
          <h1 style={{textAlign :'center'}}>Class Table</h1>
          <DataShowTable data = {data}/>
      </center>
      
    </>
  );
};

export default App;
