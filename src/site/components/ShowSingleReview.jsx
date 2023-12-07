const ShowSingleReview = ({ review }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= review.rating; i++) {
      stars.push(
        <span className="fa fa-star checked" style={{ color: "yellow" }}></span>
      );
    }
    return stars;
  };
  //   console.log(review, "REVIEW");
  // console.log(review.user.username, "REVIEW");
  console.log(review?.username);

  return (
    <div className="container my-4">
      <div className="card shadow-lg">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div className="avatar me-3">
              <h2>
                <i className="fa-solid">
                  <ion-icon name="person-circle-outline"></ion-icon>
                </i>
              </h2>
            </div>
            <div>
              <h2 className="card-title fs-4 fw-bold mb-2">
                {review?.username}
              </h2>
            </div>

            <div className="non flex-grow-1 ml-4">
              <p className="card-text mb-3">{review?.comment}</p>
              {renderStars()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowSingleReview;
