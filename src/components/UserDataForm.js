import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form } from "react-bootstrap";

import { addUserData } from "../actions/adding_actions";

export const UserDataForm = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    id: "",
  });

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    if (userData.firstName && userData.lastName && userData.phoneNumber) {
      dispatch(addUserData(userData));

      setUserData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        id: "",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      id: Math.random().toString(36).slice(2),
      [name]: value,
    });
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          name="firstName"
          value={userData.firstName}
          type="text"
          placeholder="Enter your first name"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          name="lastName"
          value={userData.lastName}
          type="text"
          placeholder="Enter your last name"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone number</Form.Label>
        <Form.Control
          name="phoneNumber"
          value={userData.phoneNumber}
          type="text"
          placeholder="Enter your phone number"
          onChange={handleChange}
        />
      </Form.Group>

      <Button type="submit">Add</Button>
    </Form>
  );
};
