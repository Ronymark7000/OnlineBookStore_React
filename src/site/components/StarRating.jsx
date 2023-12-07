import { useState } from "react";
import "../style/rating.css";
import { addReview } from "../../services/starWarsCharater";

function StarRating({ id }) {
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [reviewData, setReviewData] = useState({
    bookId: "",
    rating: 0,
    comment: "",
  });
  const handleRating = (rating) => {
    setReviewData((prevData) => ({ ...prevData, rating: rating }));
  };
  const handleComment = (event) => {
    setReviewData((prevData) => ({
      ...prevData,
      comment: event.target.value,
    }));
    console.log(event.target.value);
  };

  const handleClick = async () => {
    const payload = { ...reviewData, bookId: id };
    // console.log(payload);
    const response = await addReview(payload);
    if (response?.data?.success) {
      setMessage("Review Added Successfully");
    } else {
      setErrorMsg("Error Msg ");
    }

    setTimeout(() => {
      setMessage("");
      setErrorMsg("");
    }, 5000);
    // console.log("Data Posted", data);
  };

  return (
    <div className="container-wrapper">
      <div className="container d-flex align-items-center justify-content-center">
        <div className="row justify-content-center">
          <div className="d-flex">
            <span className="heading m-4">Give Rating</span>
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className="fa fa-star checked mt-4 m-1"
                onClick={() => handleRating(index + 1)}
                style={{ color: index < reviewData.rating ? "yellow" : "gray" }}
              ></span>
            ))}
          </div>

          <div className="d-flex text-center">
            <input
              type="text"
              className="form-control m-2"
              id="exampleInput"
              placeholder="Enter something"
              value={reviewData?.comment}
              onChange={handleComment}
            />
            <button className="btn m-2" onClick={handleClick} type="button">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StarRating;
