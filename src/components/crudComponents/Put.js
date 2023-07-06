import { useState } from "react";

const Put = ({
  inputChangeHandler,
  setters,
  title,
  resetBooks,
  setResetBooks,
  updateAuthor,
}) => {
  const [newAuthor, setNewAuthor] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) =>
          updateAuthor(e, title, newAuthor, resetBooks, setResetBooks)
        }
      >
        <input
          placeholder="title"
          onChange={(e) => inputChangeHandler(e, setters.setTitle)}
        />
        <input
          placeholder="new author"
          onChange={(e) => inputChangeHandler(e, setNewAuthor)}
        />
        <button type="submit">Update Author</button>
      </form>
    </div>
  );
};

export default Put;
