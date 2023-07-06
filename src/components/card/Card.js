import "./Card.css";

const Card = ({ book }) => {
  return (
    <div class="card">
      <p>{book.title}</p>
      <p>{book.author}</p>
      <p>{book.genre}</p>
    </div>
  );
};

export default Card;
