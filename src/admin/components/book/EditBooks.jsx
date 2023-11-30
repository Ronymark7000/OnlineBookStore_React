import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../../../axiosInstance";
import AddBook from "./AddBooks";

function EditBook() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [book, setBook] = useState(null);

  const getBook = async () => {
    const response = await axiosInstance
      .get(`/book/${id}`)
      .then((res) => res?.data)
      .catch(() => null);

    if (!response) {
      navigate("/admin/book-dashboard");
    } else {
      setBook(response?.response);
    }
  };

  useEffect(() => {
    if (id) {
      getBook();
    } else {
      navigate("/admin/book-dashboard");
    }
  }, [id]);
  if (book) return <AddBook editBook={book} />;
}

export default EditBook;
