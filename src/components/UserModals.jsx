import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

function EmployeeModal({ employee }) {
  const [employees, setEmployees] = React.useState(false);

  return (
    <Modal
      onClose={() => setEmployees(false)}
      onOpen={() => setEmployees(true)}
      employees={employees}
      trigger={<Button attached="right" positive className="view-button">Show More</Button>}
    >
      <Modal.Content image id="modal-container">
        <Image className="image" size="medium" src={employee.avatar} wrapped />
        <Modal.Description>
          <Header className="name">
            {employee.first_name} {employee.last_name}
          </Header>
          <p className="email">Email: {employee.email}</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

export default EmployeeModal;
