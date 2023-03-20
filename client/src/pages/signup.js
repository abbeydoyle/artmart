import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import { Label, TextInput, Button } from "flowbite-react";

const Signup = (props) => {
  // set initial form state
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    const mutationResponse = await addUser({
      variables: {
        firstName: formState.firstName,
        lastName: formState.lastName,
        email: formState.email,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log(formState);
  //   // const mutationResponse = await addUser({
  //   //   variables: {
  //   //     firstName: formState.firstName,
  //   //     lastName: formState.lastName,
  //   //     email: formState.email,
  //   //     password: formState.password,
  //   //   },
  //   // });
  //   // const token = mutationResponse.data.addUser.token;
  //   // Auth.login(token);

  //   // setFormState({
  //   //   firstName: "",
  //   //   lastName: "",
  //   //   email: "",
  //   //   password: "",
  //   // });
  // };

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
    <div className="bg-[#508192] m-5 p-5 rounded md:w-[50%] w-[80%] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
      <h2 className="text-2xl font-bold text-white pb-2">
        Welcome to ArtMart!
      </h2>
      <form className="flex flex-col gap-4 pb-8" onSubmit={handleFormSubmit}>
        {/* <Link to="/login">← Go to Login</Link> */}
        <div>
          <div className="mb-2 block">
            <label htmlFor="firstName">First Name:</label>
          </div>
          <input
            placeholder="Jane"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <label htmlFor="lastName">Last Name:</label>
          </div>
          <input
            placeholder="Doe"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <label htmlFor="email">Email:</label>
          </div>
          <input
            placeholder="janedoe@gmail.com"
            name="email"
            type="email"
            id="email"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <label htmlFor="pwd">Password:</label>
          </div>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleInputChange}
          />
        </div>

        {/* <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree">I agree with the terms and conditions</Label>
        </div> */}
        <Button
          type="submit"
          outline={true}
          className="md:w-[20%] w-[50%] md:ml-[40%]"
          gradientDuoTone="redToYellow"
        >
          Sign up
        </Button>
      </form>
      <h2 className="text-xl font-bold text-white pb-5">
        Already have an account?{" "}
        <Link to="/login" className="hover:text-[#cccccc] underline">
          Log in
        </Link>
      </h2>
    </div>
  );
};

export default Signup;
