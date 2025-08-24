import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  selectedBook: {},
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBooks: (state, actions) => {
      state.books = actions.payload;
    },
    setSelectedBooks: (state, actions) => {
      state.selectedBook = actions.payload;
    },
  },
});

const { reducer, actions } = bookSlice;

export const { setBooks, setSelectedBooks } = actions;
export default reducer;
