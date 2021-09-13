import React, { useState, useEffect } from "react";
import axios from "axios";
import { Item } from "semantic-ui-react";
import UserModals from "./UserModals";

const ListOfUsers = () => {
  const [employees, setEmployees] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("https://reqres.in/api/users?per_page=4");
    setEmployees(response.data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const employeeList = employees.map((employee) => {
    return (
      <Item className="employee-item">
        <Item.Header className="name">
          {`${employee.first_name} ${employee.last_name}`}
        </Item.Header>
        <Item.Image className="avatar">
          <img src={`${employee.avatar}`} />
        </Item.Image>
        <UserModals employee={employee} />
      </Item>
    );
  });

  return <div id="employee-list">{employeeList}</div>;
};

export default ListOfUsers;
