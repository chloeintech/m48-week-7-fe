const Delete = ({
  inputChangeHandler,
  setters,
  title,
  resetBooks,
  setResetBooks,
  deleteBookByTitle,
}) => {
  return (
    <div>
      <form
        onSubmit={(e) => deleteBookByTitle(e, title, resetBooks, setResetBooks)}
      >
        <input
          placeholder="title"
          onChange={(e) => inputChangeHandler(e, setters.setTitle)}
        />
        <button type="submit">Delete Book</button>
      </form>
    </div>
  );
};

export default Delete;
