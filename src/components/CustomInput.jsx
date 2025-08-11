import React from "react";
//Instead of writing an HTML tag for form separately just importing it from the react-bootstrap.
//Contains the components of the form library, like gorup, label, control and check.
import { Form } from "react-bootstrap";

// BUILDING A REUSABLE FORM INPUT.

const CustomInput = ({
  id,
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <Form.Group className="mb-3" controlId={id}>
      <Form.Label> {label} </Form.Label>
      <Form.Control
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Form.Group>
  );
};
export default CustomInput;
