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
        console.log(response);
        console.log(response.data.response);
        setData(response.data.response);
        // const dataArray = response.data.data;
        // setData(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
 
      <div className="container text-center mt-2">
        <h1>BestSeller</h1>
        <div className="row">
          {data.map((book, index) => (
            <Book key={index} book={book} />
          ))}
        </div>
      </div>

  );
};

export default HomePage;
