import "./HomePage.css";
import { useEffect } from "react";
import { useState } from "react";
import Book from "../components/Book";
import axiosInstance from "../../../axiosInstance";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "react-bootstrap";

// import BookDetail from "../components/BookDetail";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [queryParams, setQueryParams] = useSearchParams();
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchBooks = async (page, query) => {
    try {
      const response = await axiosInstance.get(
        `/books?page=${page}&query=${query}`
      );
      const data = response?.data;
      setData(data?.response);
      setTotalPages(data?.totalPage);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };
  useEffect(() => {
    const query = queryParams.get("query") ?? "";
    const page = parseInt(queryParams.get("page") ?? 1);
    setSearchQuery(query);
    fetchBooks(page, query);
  }, [queryParams]);

  // useEffect(() => {
  //   const query = queryParams.get("query") ?? "";
  //   const page = parseInt(queryParams.get("page") ?? 1);
  //   setSearchQuery(query);
  //   fetchBooks(query, page);
  // }, [queryParams]);

  // useEffect(() => {
  //   fetchBooks(queryParams.get("page") || 1);
  // }, [queryParams]);

  const handlePageChange = (pageNumber) => {
    setQueryParams({ query: searchQuery, page: pageNumber });
  };

  const handlePrevClick = () => {
    const pageNo = queryParams.get("page");
    if (pageNo > 1) {
      setQueryParams({ page: pageNo - 1 });
    }
  };

  const handleNextClick = () => {
    const pageNo = parseInt(queryParams.get("page")) || 1;
    if (pageNo < totalPages) {
      setQueryParams({ page: pageNo + 1 });
    }
  };

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

        <Pagination style={{ float: "right" }}>
          <Pagination.Prev onClick={handlePrevClick} />

          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === queryParams.get("page")}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next onClick={handleNextClick} />
        </Pagination>
      </div>
    </div>
  );
};

export default HomePage;
