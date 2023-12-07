import { useEffect, useState } from "react";
import { deleteBookFromCart, editCart } from "../../services/starWarsCharater";
import CartItem from "./CartItem";
import axiosInstance from "../../../axiosInstance";

function Cart() {
  // console.log(id);
  const cart = localStorage.getItem("cart");
  const [cartData, setCartData] = useState(JSON.parse(cart || "[]"));
  const [total, setTotal] = useState(0);
  const [totalAfterDelivery, setTotalAfterDelivery] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [deliveryOptionPrice, setDeliveryOptionPrice] = useState(0);

  const handleUpdate = async (cartId, quantity) => {
    const response = await editCart(cartId, quantity);
    // console.log(response)
    if (response?.success) {
      let carts = [];

      cartData?.forEach((item) => {
        if (item?.cartId === cartId) {
          carts.push({ ...item, quantity: quantity });
        } else {
          carts.push(item);
        }
      });
      setCartData(carts);
      window.alert(response?.message);
    } else {
      window.alert(response?.message);
    }
  };

  const handleDelete = async (cartId) => {
    const response = await deleteBookFromCart(cartId);

    if (response?.success) {
      const carts = cartData?.filter((item) => item?.cartId !== cartId);
      setCartData(carts);
      alert("Book Deleted");
    } else {
      alert("error");
    }
  };

  const handleDeliveryOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // Set the delivery option price based on the selected option
    switch (selectedValue) {
      case "1":
        setDeliveryOptionPrice(50);
        break;
      case "2":
        setDeliveryOptionPrice(200);
        break;
      case "3":
        setDeliveryOptionPrice(25);
        break;
      default:
        setDeliveryOptionPrice(0);
    }
  };
  const addOrder = async () => {
    const response = await axiosInstance.post(`/order`);
    if (response?.data?.success) {
      setCartData([]);
      localStorage.removeItem(cart);
      window.alert("Succesfully Palced Your Order");
    } else {
      window.alert("Purchase failed");
    }
  };

  useEffect(() => {
    if (cartData) {
      setCartData(cartData);

      let totalprice = 0;
      cartData.forEach((cart) => {
        totalprice += cart?.quantity * cart?.book?.price;
      });

      setTotal(totalprice);
      // Calculate the total price including the delivery option
      const totalPriceWithDelivery = totalprice + deliveryOptionPrice;
      setTotalAfterDelivery(totalPriceWithDelivery);
    }
  }, [cartData, totalAfterDelivery, deliveryOptionPrice]);

  return (
    <>
      <section
        className="h-100 h-custom"
        style={{
          background:
            "linear-gradient(45deg,#40afb3, #b8fae1, #6692cb, #b8fae1)",
        }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div
                className="card card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0 text-black">
                            Shopping Cart
                          </h1>
                          <h6 className="mb-0 text-muted">1</h6>
                        </div>
                        <hr className="my-4" />

                        {cartData.map((cart, index) => (
                          <CartItem
                            key={index}
                            cart={cart}
                            handleDelete={handleDelete}
                            handleUpdate={handleUpdate}
                          />
                        ))}

                        <h5 className="text-uppercase mb-3">Give code</h5>

                        <div className="mb-5">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Examplea2"
                              className="form-control form-control-lg"
                              value=""
                              onChange={() => console.log("first")}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Examplea2"
                            >
                              Enter your code
                            </label>
                          </div>
                        </div>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-5">
                          <h5 className="text-uppercase">Total price</h5>
                          <h5>Nrs. {total}</h5>
                        </div>

                        <button
                          type="button"
                          className="btn btn-dark btn-block btn-lg"
                          data-mdb-ripple-color="dark"
                        >
                          Back
                        </button>
                      </div>
                    </div>

                    <div className="col-md-4 p-5 bg-secondary bg-opacity-25  ">
                      <h3 className="fw-bold mb-5 mt-2 pt-1 text-center ">
                        Summary
                      </h3>
                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase">Total Price</h5>
                        <h5>NRs {total}</h5>
                      </div>

                      <h5 className="text-uppercase mb-3">
                        Shipping Standards
                      </h5>

                      <div className="mb-4 pb-2">
                        <div className="input-group mb-3">
                          <label className="input-group-text">Options</label>
                          <select
                            className="form-select"
                            value={selectedOption}
                            onChange={handleDeliveryOptionChange}
                          >
                            <option value="">Choose an option...</option>
                            <option value="1">Express Delivery(Rs.50)</option>
                            <option value="2">Instant Delivery(Rs.200)</option>
                            <option value="3">
                              Pickup on Warehouse(Rs.25)
                            </option>
                          </select>
                        </div>
                      </div>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <h5 className="text-uppercase">Total price</h5>
                        <h5>{totalAfterDelivery}</h5>
                      </div>

                      <div className="d-grid gap-2 col-6 mx-auto">
                        <button
                          className="btn btn-dark btn-block "
                          type="button"
                          onClick={addOrder}
                        >
                          Purchase
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
