// imports and dependencies
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import { Label, TextInput, Button } from "flowbite-react";
const chalk = require('chalk');

const Signup = ({ props, setOpenSignupModal, loginToggle, showSignupModal, setOpenLoginModal }) => {
  // set initial form state
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // submit signup with token
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(chalk.bgHex('#508192').white((formState)));
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // switch to login
  function SignupSwitch() {
    loginToggle()
  }

  return (
    <>
      <div className="fixed inset-0 overflow-y-auto z-10">
        {/* click off modal to exit */}
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-70"
          onClick={() => setOpenSignupModal(false)}
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-3xl p-4 mx-auto bg-[#508192] rounded-md shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <div className="mt-3 sm:flex">
              <div className="mt-2 text-center sm:ml-4 sm:text-left w-[90%]">
                <div className="w-[100%] m-5 p-5 rounded">
                <div className="text-2xl text-white pb-2">
                  <h2 className="text-2xl font-bold text-white pb-2">
                    Welcome to ArtMart!
                  </h2>
                  <form className="w-full" onSubmit={handleFormSubmit}>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="firstName" value="First Name:" />
                      </div>
                      <TextInput
                        placeholder="Jane"
                        name="firstName"
                        type="firstName"
                        id="firstName"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="lastName" value="Last Name:" />
                      </div>
                      <TextInput
                        placeholder="Doe"
                        name="lastName"
                        type="lastName"
                        id="lastName"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="email" value="Email:" />
                      </div>
                      <TextInput
                        placeholder="janedoe@gmail.com"
                        name="email"
                        type="email"
                        id="email"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="pwd" value="Password:" />
                      </div>
                      <TextInput
                        placeholder="******"
                        name="password"
                        type="password"
                        id="pwd"
                        onChange={handleInputChange}
                      />
                    </div>
                    <Button
                      type="submit"
                      outline={true}
                      className="md:w-[20%] w-[50%] md:ml-[40%] mt-[1rem]"
                      gradientDuoTone="redToYellow"
                    >
                      Sign up
                    </Button>
                  </form>
                  {/* login switch */}
                  <h2 className="text-xl font-bold text-white pb-5 pt-5">
                    Already have an account?{" "}
                    <Link
                      className="hover:text-[#cccccc] underline"
                      onClick={() => 
                        SignupSwitch()
                      }
                    >
                      Log in
                    </Link>
                  </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
