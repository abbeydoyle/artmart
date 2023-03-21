import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import { Label, TextInput, Button } from "flowbite-react";
import Auth from "../utils/auth";

const Login = ({ props, setOpenLoginModal, signupToggle, showLoginModal, setOpenSignupModal}) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };
  function LoginSwitch() {
    signupToggle()
  }

  return (
    <>
      <div className="fixed inset-0 overflow-y-auto z-10">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-70"
          onClick={() => setOpenLoginModal(false)}
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-3xl p-4 mx-auto bg-[#508192] rounded-md shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <div className="mt-3 sm:flex">
              <div className="mt-2 text-center sm:ml-4 sm:text-left w-[90%]">
                <div className="w-[100%] m-5 p-5 rounded">
                  <div className="text-2xl text-white pb-2">
                    <h2 className="text-2xl font-bold text-white pb-2">
                      Welcome back!
                    </h2>
                    <div className="">
                      {data ? (
                        <p>
                          Success! You may now head{" "}
                          <Link to="/">back to the homepage.</Link>
                        </p>
                      ) : (
                        <div>
                          <form
                            className="w-full"
                            onSubmit={handleFormSubmit}
                          >
                            <div>
                              <div className="mb-2 block">
                                <Label htmlFor="email" value="Email Address" />
                              </div>
                              <TextInput
                                className="form-input"
                                placeholder="janedoe@gmail.com"
                                name="email"
                                type="email"
                                value={formState.email}
                                onChange={handleChange}
                              />
                            </div>
                            <div>
                              <div className="mb-2 block">
                                <Label htmlFor="password" value="Password" />
                              </div>
                              <TextInput
                                className="form-input"
                                placeholder="*******"
                                name="password"
                                type="password"
                                value={formState.password}
                                onChange={handleChange}
                              />
                            </div>
                            <Button
                              type="submit"
                              outline={true}
                              className="md:w-[20%] w-[50%] md:ml-[40%] mt-[1rem]"
                              gradientDuoTone="redToYellow"
                            >
                              Log in
                            </Button>
                          </form>
                          <h2 className="text-xl font-bold text-white pb-5 pt-5">
                            New user?{" "}
                            <Link
                              className="hover:text-[#cccccc] underline"
                              onClick={() => LoginSwitch()}
                            >
                              Sign up
                            </Link>
                          </h2>
                        </div>
                      )}

                      {error && (
                        <div className="my-3 p-3 bg-danger text-white">
                          {error.message}
                        </div>
                      )}
                    </div>
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

export default Login;
