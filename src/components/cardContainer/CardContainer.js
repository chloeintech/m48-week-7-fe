import Card from "../card/Card";
import "./CardContainer.css";

const CardContainer = ({ books }) => {
  console.log("books in cardcontainer: ", books);
  return (
    <div class="card-container">
      {books.map((book, index) => (
        <Card book={book} key={book._id} />
      ))}
    </div>
  );
};

export default CardContainer;
