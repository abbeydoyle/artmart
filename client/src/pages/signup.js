import React, { useState } from "react";
import { Link } from "react-router-dom";
// TODO: import CSS ???
import { useMutation } from "@apollo/client";
//import Auth from "../utils/auth";  //TODO: likely need auth.
import { ADD_USER } from "../utils/mutations";

function signupForm(props) {
  // set initial form state
  const [formState, setFormState] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  // set state for form validation
  const [validated] = useState(false);
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });

      // console.log(data);
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //TODO: HAVE TO CHANGE A LOT OF THESE NAMES BELOW
  //TODO: ADD FEEDBACK???
  // TODO: Style - get rid of either placeholder or label?
  return (
    <>
      <Link to="/login">← Go to Login</Link>

      <h2>Signup</h2>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name"
            name="fname"
            onChange={handleInputChange}
            value={userFormData.fname}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            name="lname"
            onChange={handleInputChange}
            value={userFormData.lname}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
        </Form.Group>
        <Button
          disabled={
            !(
              userFormData.username &&
              userFormData.email &&
              userFormData.password
            )
          }
          type="submit"
          variant="primary"
        >
          SUBMIT
        </Button>
      </Form>
    </>
  );
}

export default signupForm;
