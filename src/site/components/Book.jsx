import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { addToCart } from "../../services/starWarsCharater";
import { Link } from "react-router-dom";

export default function Book({ book }) {
  const handleSubmit = async () => {
    try {
      // console.log(id);
      const response = await addToCart(book.bookId);
      window.alert(response?.message);
    } catch (error) {
      // console.error("An error occurred:", error);
    }
  };

  const carts = JSON.parse(localStorage.getItem("cart")) || [];
  const bookExistAlreadyExistInCart = carts.find(
    (cart) => cart?.book?.bookId === book?.bookId
  );

  return (
    <div className="col-12  col-sm-6 col-md-3">
      <div style={{ margin: "40px" }}>
        <Card style={{ width: "18rem" }}>
          <img alt="Sample" src="https://picsum.photos/300/200" />

          <CardBody>
            <CardTitle tag="h5">{book?.title}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {book?.author}
            </CardSubtitle>
            <CardText>Price : Nrs {book?.price}</CardText>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Link to={`bookdetails/${book?.bookId}`}>
                <Button style={{ background: "blue" }}>View Details</Button>
              </Link>

              {!bookExistAlreadyExistInCart ? (
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  style={{ background: "DodgerBlue" }}
                >
                  Add to Cart
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled
                  style={{ background: "DodgerBlue" }}
                >
                  In Cart
                </Button>
              )}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
