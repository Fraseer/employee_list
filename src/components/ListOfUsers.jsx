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
      <Item.Group>
        <Item className="employee-item">
          <Item.Header className="name">
            {`${employee.first_name} ${employee.last_name}`}
          </Item.Header>
          <Item.Image size="tiny" className="avatar" alt="">
            <img src={`${employee.avatar}`} alt=""/>
          </Item.Image>
          <UserModals employee={employee} />
        </Item>
      </Item.Group>
    );
  });

  return <div id="employee-list">{employeeList}</div>;
};

export default ListOfUsers;
