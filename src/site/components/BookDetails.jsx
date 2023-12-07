import { useParams } from "react-router-dom";
import "../style/bookdetail.css";
import { useEffect, useState } from "react";
import axiosInstance from "../../../axiosInstance";
import StarRating from "../components/StarRating";
import { addToCart } from "../../services/starWarsCharater";
import ShowSingleReview from "./ShowSingleReview";

function BookDetails() {
  const { id } = useParams();
  const [bookData, setBookData] = useState(null);
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axiosInstance.get(`/book/${id}`);
        console.log(response?.data?.response?.reviews);
        setBookData(response?.data);
        setReviewList(response?.data?.response?.reviews);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDetails();
  }, [id]);

  const cartHandler = async () => {
    const res1 = await addToCart(id);
    window.alert(res1?.message);
  };

  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(45deg,#40afb3, #b8fae1, #6692cb, #b8fae1)",
      }}
    >
      <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6">
            <img
              className="card-img-top mb-5 mb-md-0"
              src="https://picsum.photos/250/200"
              alt="..."
            />
          </div>
          <div className="col-md-6">
            <div className="small mb-1">{bookData?.response?.id}</div>
            <h1 className="display-5 fw-bolder">{bookData?.response?.title}</h1>
            <h2 className="fs-5 mt-4 mb-2">
              <b>Author:</b> {bookData?.response?.author}
            </h2>
            <h2 className="fs-5 mb-4">
              <b>Genre:</b> {bookData?.response?.genre}
            </h2>
            <div className="fs-5 mb-5">
              <span>Nrs {bookData?.response?.price}</span>
            </div>
            <p className="lead">
              This is a great book to read for you. Furthoermore Lorem ipsum
              dolor ads dfdt sit amet consectetur adipisicing elit. Praesentium
              at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi
              marginos kilos paltis alias magni, ac?
            </p>

            <button
              className="btn btn-outline-dark flex-shrink-0"
              onClick={cartHandler}
              type="button"
            >
              <i className="bi bi-cart-fill me-1"></i>
              Add to cart
            </button>
            <StarRating id={id} key={id} />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-center">Book Reviews</h3>
        {reviewList.map((review, index) => (
          <ShowSingleReview key={index} review={review} />
        ))}
      </div>
    </section>
  );
}

export default BookDetails;
