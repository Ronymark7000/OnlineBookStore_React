import CartItem from "./CartItem";

function Cart() {
  
  // console.log(id);
  const cart = localStorage.getItem("cart");
  const cartData = JSON.parse(cart || "[]");


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
                          <CartItem key={index} cart={cart} />
                        ))}

                        <h5 className="text-uppercase mb-3">Give code</h5>

                        <div className="mb-5">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Examplea2"
                              className="form-control form-control-lg"
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
                          <h5>€ 137.00</h5>
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
                        <h5>€ 132.00</h5>
                      </div>

                      <h5 className="text-uppercase mb-3">
                        Shipping Standards
                      </h5>

                      <div className="mb-4 pb-2">
                        <div className="input-group mb-3">
                          <label className="input-group-text">Options</label>
                          <select className="form-select" value="Types">
                            <option selected>Types</option>
                            <option value="1">Express Delivery</option>
                            <option value="2">Instant Delivery</option>
                            <option value="3">Pickup on Warehouse</option>
                          </select>
                        </div>
                      </div>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <h5 className="text-uppercase">Total price</h5>
                        <h5>€ 137.00</h5>
                      </div>

                      <div className="d-grid gap-2 col-6 mx-auto">
                        <button
                          className="btn btn-dark btn-block "
                          type="button"
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
