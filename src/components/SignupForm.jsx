import React, { useState } from "react";
import axios from "axios";
// import { postUser } from "../features/UserFeature/userAPI";
import Auth from "../auth/Auth";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import { Button, Form } from "react-bootstrap";
import CustomInput from "./CustomInput";
import { toast } from "react-toastify";
//This is the main container for all signup-related UI and logic.
// It declaers the signup form component as an arrow function.

const SignupForm = () => {
  // grabs the navigate function from react-router-dom.
  //It lets us to programmically redirect the user to other pages after the signup.

  const navigate = useNavigate();

  // It defines the starting value for the form fields, and makes sure that the
  //form fields start empty and gives us a consistent structure to the form state.
  let initialState = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
    phone: 0,
  };
  //User schema and the sign form input fields should match.
  //
  console.log(useState(0));

  //Uses custom useForm hook to manage the form's state, using this would help in
  // avoiding repeated useState adn handleOnChange logic in every form component
  const { form, setForm, handleOnChange } = useForm(initialState);
  let inputFields = [
    {
      id: "fname",
      label: "First Name",
      name: "fname",
      type: "text",
      placeholder: "Enter First Name",
      value: form.fname,
    },
    {
      id: "lname",
      label: "Last Name",
      name: "lname",
      type: "text",
      placeholder: "Enter First Name",
      value: form.lname,
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
      id: "phone",
      label: "Phone",
      name: "phone",
      type: "number",
      placeholder: "Enter Phone",
      value: form.phone,
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
      // console.log(form); Checked if data is avaiable o
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
    <div className="border border-white border-lg p-5 rounded rounded-5 text-white  text-start">
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
        {/* <Form.Group className="mb-3">
          <Form.Label> Select User Type</Form.Label> */}
        {/* <Form.Select
            aria-label="Default select example"
            name="type" */}
        {/* // onChange={handleOnChange}
              //   defaultValue={“student”} */}

        {/* <option value="select">Select User Type</option>
            {""}
            {/* <option value=“student” selected={form.type == “student”}> */}
        {/* <option value="student">Student</option>
            <option value="admin">Admin</option> */}
        {/* </Form.Select>
        </Form.Group> */}

        <Button
          variant="primary"
          type="submit"
          className=" d-flex flex-column mt-2"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignupForm;
