//  using Function

import React from 'react';

const DataTable = ({ data }) => {
  return (
    <table  border={1} cellPadding={8} cellSpacing={2} style={{textAlign :'center'}}>
      <thead >
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Courses</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.grid}>
            <td>{item.grid}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
            <td>{item.course.join(', ')}</td>
            <td>{item.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
