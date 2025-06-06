import { useEffect, useState } from "react";

function UserProfile() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    //eslint-disable-next-line
  }, [localStorage.getItem("user")]);
  return (
    <div>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          {/* <div className="row mb-5">
            <Link to="/">
              <button className="btn btn-outline-danger ">
                <i className="fas fa-arrow-left mr-2"></i>Go Back
              </button>
            </Link>
          </div> */}

          <div className="row">
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user?.username}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user?.email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">none</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Mobile</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">none</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">none</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: "150px" }}
                  ></img>
                  <h5 className="my-3">{user?.username}</h5>
                  <p className="text-muted mb-1">{user?.role}</p>
                  <p className="text-muted mb-4">Address - none</p>
                  <div className="d-flex justify-content-center mb-2">
                    <button type="button" className="btn btn-primary">
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary ms-1"
                    >
                      Password
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserProfile;
