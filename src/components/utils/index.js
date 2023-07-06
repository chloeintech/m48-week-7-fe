export const getAllBooks = async (e, resetBooks, setResetBooks) => {
  e.preventDefault();
  await setResetBooks(!resetBooks);
};

export const addBook = async (
  e,
  title,
  author,
  genre,
  resetBooks,
  setResetBooks
) => {
  e.preventDefault();
  try {
  } catch (error) {}
  const body = JSON.stringify({
    title: title,
    author: author,
    genre: genre,
  });

  const response = await fetch("http://localhost:5001/books/addbook", {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: body,
  });

  const data = await response.json();
  console.log(response);
  console.log(data);
  await setResetBooks(!resetBooks);
  e.target.reset();
};

export const updateAuthor = async (
  e,
  title,
  newAuthor,
  resetBooks,
  setResetBooks
) => {
  e.preventDefault();
  console.log("reset books updateAuthor: ", resetBooks);
  console.log("title, newautor: ", title, newAuthor);
  const body = JSON.stringify({
    title: title,
    newAuthor: newAuthor,
  });

  const response = await fetch("http://localhost:5001/books/updatebookauthor", {
    method: "PUT",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: body,
  });

  const data = await response.json();
  console.log(response);
  console.log(data);
  await setResetBooks(!resetBooks);
  e.target.reset();
};

export const deleteBookByTitle = async (
  e,
  title,
  resetBooks,
  setResetBooks
) => {
  e.preventDefault();
  const body = JSON.stringify({
    title: title,
  });

  const response = await fetch("http://localhost:5001/books/deletebook", {
    method: "DELETE",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: body,
  });

  const data = await response.json();
  console.log(response);
  console.log(data);
  await setResetBooks(!resetBooks);
  e.target.reset();
};
