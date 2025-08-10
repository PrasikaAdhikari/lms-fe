import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CustomInput from "./CustomInput";
//This is the main container for all signup-related UI and logic.
// It declaers the signup form component as an arrow function.
const SignupForm = () => {
  // grabs the navigate function from react-router-dom.
  //It lets us to programmically redirect the user to other pages after the signup.
  const naviage = useNavigate();

  // It defines the starting value for the form fields, and makes sure that the
  //form fields start empty and gives us a consistent structure to the form state.
  let initialState = {
    username: "",
    email: "",
    passsword: "",
  };

  //
  console.log(useState(0));

  //Uses custom useForm hook to manage the form's state, using this would help in
  // avoiding repeated useState adn handleOnChange logic in every form component
  const { form, setForm, handleOnChange } = useForm(initialState);
  let inputFields = [
    {
      id: "name",
      label: "Name",
      name: "username",
      type: "text",
      placeholder: "Enter Name",
      value: form.username,
    },
    {
      id: "email",
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter Email",
      value: form.email,
    },
    {
      id: "password",
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter Password",
      value: form.password,
    },
    {
      id: "cpassword",
      label: "Confirm",
      name: "cpassword",
      type: "password",
      placeholder: "Confirm Password",
    },
  ];
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    alert("Form submitted");

    // make a create user post request
    // axios call
    // {username, email, password}

    if (form.password != form.cpassword) {
      toast.error("PASSWORD MISMATCH", {
        position: "bottom-center",
        theme: "dark",
      });
    } else {
      let data = await postUser(form);

      console.log("response from post user", data);

      // if success go to login form
      // else do nothing
      if (data.status) {
        toast.success(data.message);
        navigate("/login");
      } else {
        toast.error(data.message);
      }
    }
  };
  // Form rendering
  return (
    <div className="border border-white border-lg p-5 rounded rounded-5">
      <h1>Signup Form</h1>
      <hr />
      <Form onSubmit={handleOnSubmit}>
        {inputFields.map((item) => {
          return <CustomInput {...item} onChange={handleOnChange} />;
        })}

        {/* <input
          type="text"
          name="custom"
          value={customValue}
          onChange={handleOnChange}
        /> */}

        {/* <CustomInput
          id="test"
          label={"CUSTOM LABEL"}
          name="custom"
          type={"date"}
          placeholder={"Custo placeholder"}
        /> */}

        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>
 */}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
