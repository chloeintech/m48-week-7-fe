const Get = ({ getAllBooks, resetBooks, setResetBooks }) => {
  return (
    <div>

      <button onClick={(e) => getAllBooks(e, resetBooks, setResetBooks)}>
        Get All Books
      </button>
    </div>
  );
};

export default Get;
