import React, { useState } from "react";
import { Form } from "react-bootstrap";

const CreateUser = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    emaill: "",
    password: "",
    role: "",
  });
  return (
    <Form>
      <Form.Group controlId="formGroupName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="name" />
      </Form.Group>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" />
      </Form.Group>
      <Form.Group controlId="formGroupRole">
        <Form.Label>Role</Form.Label>
        <Form.Control type="text" placeholder="Role" name="role" />
      </Form.Group>
    </Form>
  );
};

export default CreateUser;
