import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { createBookApi } from "../features/books/booksApi";
import {
  createBookAction,
  fetchAllBooksAction,
} from "../features/books/booksAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddBooks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
    isbn: "",
    publishedYear: "",
    description: "",
  });
  // This component will handle adding new books to the library
  const bookObject = [
    {
      title: "Add New Book",
      description: "Fill in the details of the book you want to add.",
      fields: [
        {
          name: "title",
          label: "Title",
          type: "text",
          placeholder: "Enter book title",
        },
        {
          name: "author",
          label: "Author",
          type: "text",
          placeholder: "Enter author's name",
        },
        {
          name: "isbn",
          label: "ISBN",
          type: "number",
          placeholder: "Enter ISBN number",
        },
        {
          name: "publishedYear",
          label: "Published Date",
          type: "number",
          placeholder: "Select published date",
        },
        {
          name: "genre",
          label: "Genre",
          type: "text",
          placeholder: "Enter book genre",
        },
        {
          name: "description",
          label: "Description",
          type: "textarea",
          placeholder: "Enter a brief description of the book",
        },
      ],
      submitButton: "Add Book",
      cancelButton: "Cancel",
    },
  ];

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();

    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });

    let data = await dispatch(createBookAction(formData));
    if (data.status == "success") {
      navigate("/books");
    }
  };
  return (
    <div className="p-5">
      {console.log(bookObject)}
      <h2>{bookObject[0].title}</h2>
      <p>{bookObject[0].description}</p>
      <Form onSubmit={handleOnSubmit}>
        {bookObject[0].fields.map((field, index) => (
          <Form.Group
            key={index}
            className="mb-3"
            controlId={`formBasic${field.label}`}
          >
            <Form.Label className="form-label">{field.label}</Form.Label>
            <Form.Control
              type={field.type}
              placeholder={field.placeholder}
              name={field.name}
              onChange={(e) => {
                let updatedForm = { ...form, [e.target.name]: e.target.value };
                setForm(updatedForm);
              }}
            />
          </Form.Group>
        ))}

        <Form.Group className="mb-3" controlId={`formBasic-file`}>
          <Form.Label className="form-label">Upload Image</Form.Label>
          <Form.Control
            type="file"
            placeholder="update image"
            name="image"
            accept="image/*"
            onChange={(e) => {
              let updatedForm = { ...form, [e.target.name]: e.target.files[0] };
              setForm(updatedForm);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {bookObject[0].submitButton}
        </Button>
        <Button variant="secondary" type="button" className="ms-2">
          {bookObject[0].cancelButton}
        </Button>
      </Form>
    </div>
  );
};

export default AddBooks;
