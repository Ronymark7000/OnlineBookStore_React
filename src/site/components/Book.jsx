
// import { BrowserRouter as Link } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
export default function Book({ book }) {
  // console.log(book);

  return (
    <div className="col-12  col-sm-6 col-md-3">
      <div style={{ margin: "40px" }}>
        <Card
          style={{
            width: "18rem",
          }}
        >
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
              <Button style={{ background: "blue" }}>Buy</Button>
              <Link to="/cart">
                <Button style={{ background: "DodgerBlue" }}>
                  Add to Cart
                </Button>
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
  