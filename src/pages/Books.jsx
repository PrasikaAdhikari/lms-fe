import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { RiDeleteBin5Line, RiEdit2Line } from "react-icons/ri";
import { MdLibraryAdd } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { setBooks } from "../features/books/booksSlice";
// import { getAllBooksApi } from "../features/books/booksApi";
// import { toast } from "react-toastify";
import {
  fetchAllBooksAction,
  updateBookAction,
} from "../features/books/booksAction";
import { setSelectedBooks } from "../features/books/booksSlice";

const Books = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const booksList = [
  //   // Sample data for books, to be replace with actual data from API or state management
  //   {
  //     id: 1,
  //     status: {
  //       available: true,
  //       borrowed: false,
  //       reserved: false,
  //     },
  //     title: "The Great Gatsby",
  //     borrowed_in: "2023-10-02",
  //     returned_on: "2023-10-15",
  //   },
  //   {
  //     id: 2,
  //     date: "2023-10-05",
  //     title: "1984",
  //     borrowed_in: "2023-10-06",
  //     returned_on: "2023-10-20",
  //   },
  //   {
  //     id: 3,
  //     date: "2023-10-10",
  //     title: "To Kill a Mockingbird",
  //     borrowed_in: "2023-10-11",
  //     returned_on: "2023-10-25",
  //   },
  // ];

  const { books } = useSelector((store) => store.bookStore);

  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    // api
    dispatch(fetchAllBooksAction());
  }, []);

  useEffect(() => {
    setBookList(books);
  }, [books]);

  return (
    <div className="p-5">
      <h1>Books</h1>
      <p>Manage your books, add new ones, or update existing entries.</p>
      <hr />
      <Link
        to="/books/add-books"
        className="btn btn-success d-inline-flex align-items-center add-book-btn"
      >
        <MdLibraryAdd className="me-1" />
        Add Book
      </Link>
      <Table hover variant="light" className="text-center mt-3">
        <thead>
          <tr>
            {/* <th>
              <Form.Check type="checkbox" value="all" />
            </th> */}
            <th>#</th>
            <th>Book Title</th>
            <th>Status</th>
            <th>Is Available</th>
            <th>Expected Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookList.map((book, index) => {
            return (
              <tr key={book._id}>
                {/* <td>
                  <Form.Check type="checkbox" value={book.id} />
                </td> */}
                <td>{index + 1}</td>
                <td>
                  <img
                    src={
                      book.thumbnail.includes("http")
                        ? book.thumbnail
                        : import.meta.env.VITE_APP_API_URL +
                          "/" +
                          book.thumbnail
                    }
                    width="80px"
                  />{" "}
                  {book.title}
                </td>
                <td>
                  {" "}
                  {/* <input
                    type="checkbox"
                    name="status"
                    id="status"
                    checked={book.status === "active" ? true : false}
                    onChange={(e) => {
                      dispatch(
                        updateBookAction({
                          _id: book._id,
                          status: e.target.checked ? "active" : "inactive",
                        })
                      );
                    }}
                  />{" "} */}
                  <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                    checked={book.status === "active" ? true : false}
                    onChange={(e) => {
                      dispatch(
                        updateBookAction({
                          _id: book._id,
                          status: e.target.checked ? "active" : "inactive",
                        })
                      );
                    }}
                  />
                </td>
                <td>{book.isAvailable ? "Available" : "Not Available"}</td>
                <td>{book.expectedAvailable?.split("T")[0]}</td>
                <td>
                  <Button
                    variant="danger"
                    className="d-inline-flex justify-content-center me-2"
                  >
                    <RiDeleteBin5Line />
                  </Button>
                  <Button
                    variant="warning"
                    className="d-inline-flex justify-content-center"
                    onClick={() => {
                      let selectedBook = books.find((b) => b._id == book._id);
                      console.log(selectedBook);
                      // update the selected book
                      dispatch(setSelectedBooks(selectedBook));
                      navigate("/books/edit-books");
                    }}
                  >
                    <RiEdit2Line />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Books;
