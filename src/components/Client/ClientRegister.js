import React, { useState } from "react";
import { Form } from "react-bootstrap";

const ClientRegister = () => {
  const [registerClient, setRegisterClient] = useState({
    name: "",
    phone: "",
  });
  return (
    <Form>
      <Form.Group controlId="formGroupName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" name="name" />
      </Form.Group>
      <Form.Group controlId="formGroupPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Phone Number"
          name="phone"
        />
      </Form.Group>
    </Form>
  );
};

export default CreateUser;
