import React from "react";
import "./CrudContainer.css";
import { useState } from "react";
import {
  addBook,
  updateAuthor,
  deleteBookByTitle,
  getAllBooks,
} from "../utils";

import Get from "../crudComponents/Get";
import Post from "../crudComponents/Post";
import Put from "../crudComponents/Put";
import Delete from "../crudComponents/Delete";

const CrudContainer = ({ books, setBooks, setResetBooks, resetBooks }) => {
  const [option, setOption] = useState("get");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  const setters = {
    setTitle,
    setAuthor,
    setGenre,
  };

  const setCrudOption = (e) => {
    e.preventDefault();
    setOption(e.target.value);
  };

  const inputChangeHandler = (e, setter, state) => {
    setter(e.target.value);
    console.log(state);
  };

  return (
    <div class="crud-container">
      <h2>Crud Operations</h2>
      <div>
        <button onClick={(e) => setCrudOption(e)} value={"get"}>
          GET
        </button>
        <button onClick={(e) => setCrudOption(e)} value={"post"}>
          POST
        </button>
        <button onClick={(e) => setCrudOption(e)} value={"put"}>
          PUT
        </button>
        <button onClick={(e) => setCrudOption(e)} value={"delete"}>
          DELETE
        </button>
      </div>
      {option === "get" ? (
        <Get
          getAllBooks={getAllBooks}
          resetBooks={resetBooks}
          setResetBooks={setResetBooks}
        />
      ) : option === "post" ? (
        <Post
          inputChangeHandler={inputChangeHandler}
          addBook={addBook}
          title={title}
          author={author}
          genre={genre}
          resetBooks={resetBooks}
          setResetBooks={setResetBooks}
          setters={setters}
        />
      ) : option === "put" ? (
        <Put
          inputChangeHandler={inputChangeHandler}
          setters={setters}
          updateAuthor={updateAuthor}
          title={title}
          setBooks={setBooks}
          resetBooks={resetBooks}
          setResetBooks={setResetBooks}
        />
      ) : option === "delete" ? (
        <Delete
          inputChangeHandler={inputChangeHandler}
          setters={setters}
          deleteBookByTitle={deleteBookByTitle}
          title={title}
          setBooks={setBooks}
          resetBooks={resetBooks}
          setResetBooks={setResetBooks}
        />
      ) : null}
    </div>
  );
};

export default CrudContainer;
