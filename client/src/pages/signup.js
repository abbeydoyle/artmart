import "../index.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// TODO: import CSS ???
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

const Signup = (props) => {
  // set initial form state
  const [formState, setFormState] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      // console.log(data);
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }

    setFormState({
      fname: "",
      lname: "",
      email: "",
      password: "",
    });
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
      <h2>Signup</h2>
      <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
        <Link to="/login">← Go to Login</Link>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="fname" value="first name" />
          </div>
          <TextInput
            id="fnameInput"
            type="text"
            placeholder="first name"
            required={true}
            shadow={true}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="lname" value="last name" />
          </div>
          <TextInput
            id="lnameInput"
            type="text"
            placeholder="last name"
            required={true}
            shadow={true}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="email" />
          </div>
          <TextInput
            id="emailInput"
            type="email"
            placeholder="email"
            required={true}
            shadow={true}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="password" />
          </div>
          <TextInput
            id="passwordInput"
            type="password"
            required={true}
            shadow={true}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree">I agree with the terms and conditions</Label>
        </div>
        <Button type="submit">Sign Up</Button>
      </form>
    </>
  );
};

export default Signup;
