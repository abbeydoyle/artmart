// import "../index.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// TODO: import CSS ???
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import { Label, TextInput, Checkbox, Button } from "flowbite-react";

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

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      console.log(data);
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }

    setFormState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
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
    <div className="bg-[#508192] m-5 p-5 rounded md:w-[50%] w-[80%]">
      <h2 className="text-2xl font-bold text-white pb-2">
        Welcome to ArtMart!
      </h2>
      <form className="flex flex-col gap-4 pb-8" onSubmit={handleFormSubmit}>
        {/* <Link to="/login">← Go to Login</Link> */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="firstName" value="First Name" />
          </div>
          <TextInput
            id="fnameInput"
            type="text"
            placeholder="Jane"
            required={true}
            shadow={true}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="lastName" value="Last Name" />
          </div>
          <TextInput
            id="lnameInput"
            type="text"
            placeholder="Doe"
            required={true}
            shadow={true}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email Address" />
          </div>
          <TextInput
            id="emailInput"
            type="email"
            placeholder="janedoe@email.com"
            required={true}
            shadow={true}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password" />
          </div>
          <TextInput
            id="passwordInput"
            type="password"
            placeholder="*******"
            required={true}
            shadow={true}
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
