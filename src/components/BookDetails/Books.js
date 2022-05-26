import { useEffect, useState } from "react";
import axios from "axios";
import BookItem from "./BookItem";
import "./books.css";
const URL = "https://my-bookstore-collections.herokuapp.com/books";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function Books() {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  // console.log(books);
  return (
    <div>
      <ul>
        {books &&
          books.map((book, index) => {
            return (
              <li key={index}>
                <BookItem book={book} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Books;
