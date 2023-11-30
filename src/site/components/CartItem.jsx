function CartItem({cart}) {
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
        <button
          className="btn btn-link px-1"
          onClick={() => {
            document.getElementById("form1").stepDown();
          }}
        >
          <i className="fas fa-minus"></i>
        </button>

        <input
          id="form1"
          min="1"
          name="quantity"
          defaultValue="1"
          type="number"
          className="form-control form-control-lg"
          style={{width:"100px"}}
        />

        <button
          className="btn btn-link px-1"
          onClick={() => {
            document.getElementById("form1").stepUp();
          }}
        >
          <i className="fas fa-plus"></i>
        </button>
      </div>
      <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
        <h6 className="mb-0">Nrs{cart?.book?.price}</h6>
      </div>
      <div className="col-md-1 col-lg-1 col-xl-1 text-end">
        <a href="#!" className="text-muted">
          <i className="fas fa-times"></i>
        </a>
      </div>
    </div>
  );
}

export default CartItem