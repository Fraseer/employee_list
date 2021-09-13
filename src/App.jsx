import React from "react";
import ListOfUsers from "./components/ListOfUsers";
import {Container, Header} from "semantic-ui-react"

const App = () => {
  return(
    <Container textAlign>
      <Header size="large" id="header">
        Employee List
      </Header>
      <ListOfUsers />
    </Container>
  )
}

export default App



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { List } from "semantic-ui-react";

// const App = () => {
//   const [employees, setEmployees] = useState([]);

//   const fetchData = async () => {
//     const response = await axios.get("https://reqres.in/api/users");
//     setEmployees(response.data.data);
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const employeeList = employees.map((employee) => {
//     return (
//       <List>
//         {`${employee.first_name} ${employee.last_name}`}
//         <br />
//         {`${employee.email}`} <img src={`${employee.avatar}`} />
//       </List>
//     );
//   });

//   return (
//     <div>
//       <h1 id="header">Employee List</h1>
//       <div id="employee-list">
//         {employeeList}
//       </div>
//     </div>
//   );
// };

// export default App;
