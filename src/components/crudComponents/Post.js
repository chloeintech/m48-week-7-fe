const Post = ({
  inputChangeHandler,
  setters,
  addBook,
  title,
  author,
  genre,
  resetBooks,
  setResetBooks,
}) => {
  return (
    <div>
      <form
        onSubmit={(e) =>
          addBook(e, title, author, genre, resetBooks, setResetBooks)
        }
      >
        <input
          placeholder="title"
          onChange={(e) => inputChangeHandler(e, setters.setTitle, title)}
        />
        <input
          placeholder="author"
          onChange={(e) => inputChangeHandler(e, setters.setAuthor, author)}
        />
        <input
          placeholder="genre"
          onChange={(e) => inputChangeHandler(e, setters.setGenre, genre)}
        />
        <button type="submit">Post to DB</button>
      </form>
    </div>
  );
};

export default Post;
