import "./HomePage.css";
import { useEffect } from "react";
import { getBooks } from "../../services/starWarsCharater";
import { useState } from "react";
import Book from "../components/Book";
// import BookDetail from "../components/BookDetail";

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getBooks()
      .then((response) => {
     
        setData(response.data.response);

      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div
        style={{
        background: "linear-gradient(45deg,#40afb3, #b8fae1, #6692cb, #b8fae1)",
      }}
    >
      <div className="container text-center mt-2">
        <h1 className="pt-2">Selection of Book to Choose</h1>
        <div className="row">
          {data.map((book, index) => (
            <Book key={index} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
