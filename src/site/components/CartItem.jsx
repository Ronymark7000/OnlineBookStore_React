import { useEffect, useState } from "react";

function CartItem({ cart, handleDelete, handleUpdate }) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (cart) {
      setQuantity(cart?.quantity);
    }
  }, [cart]);

  return (
    <div className="row mb-4 d-flex justify-content-between align-items-center">
      <div className="col-md-2 col-lg-2 col-xl-2">
        <img
          src="https://picsum.photos/300/200"
          className="img-fluid rounded-3"
          alt="Book Image"
        />
      </div>
      <div className="col-md-3 col-lg-3 col-xl-3">
        <h6 className="text-muted">{cart?.book?.title}</h6>
        <h6 className="text-black mb-0">{cart?.book?.author}</h6>
      </div>
      <div className="col-md-3 col-lg-3 d-flex">
        <input
          id="form1"
          name="quantity"
          type="number"
          className="form-control form-control-lg"
          style={{ width: "100px" }}
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <button
          className="btn btn-link px-1"
          onClick={() => handleUpdate(cart?.cartId, quantity)}
        >
          Change
        </button>
      </div>

      <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
        <h6 className="mb-0">Nrs{cart?.book?.price * quantity}</h6>
      </div>

      <div className="col-md-1 col-lg-1 col-xl-1 text-end">
        <a href="#!" className="text-muted">
          <i
            className="fas fa-times"
            onClick={() => handleDelete(cart.cartId)}
          ></i>
        </a>
      </div>
    </div>
  );
}

export default CartItem;
