import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import { Label, TextInput, Button } from "flowbite-react";
import Auth from "../utils/auth";

const Login = (props) => {
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

  return (
    <div className="bg-[#508192] m-5 p-5 rounded md:w-[50%] w-[80%] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
      <h2 className="text-2xl font-bold text-white pb-2">Welcome back!</h2>
      <div className="card-body">
        {data ? (
          <p>
            Success! You may now head <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <div>
          <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
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
            <Button type="submit" outline={true} className="md:w-[20%] w-[50%] md:ml-[40%] mt-[1rem]" gradientDuoTone="redToYellow">
          Log in
        </Button>
          </form>
          <h2 className="text-xl font-bold text-white pb-5 pt-5">
        New user? <Link to="/signup" className="hover:text-[#cccccc] underline">Sign up</Link>
      </h2>
    </div>
        )}

        {error && (
          <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
        )}
      </div>
    </div>
  );
};

export default Login;
