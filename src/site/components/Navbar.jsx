import { useState } from "react";
import { Link } from "react-router-dom";
import { handleLogout } from "../../services/starWarsCharater";

function Navbar() {
  // State to manage the navbar's openness
  const [isOpen, setIsOpen] = useState(false);

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || ""
  );

  // Function to toggle the navbar's openness
  const toggle = () => setIsOpen(!isOpen);

  const handleLogoutButton = () => {
    handleLogout();
    setUser(null);
  };

  return (
    <div>
      {/* Navbar component */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          ABC Books
        </a>
        {/* Navbar toggler button */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={toggle} // Toggle the navbar on button click
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar content */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          {/* Navbar links */}
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to={"/"}>
                <span className="nav-link">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/cart"}>
                <span className="nav-link">Cart</span>
              </Link>
            </li>
            {/* Dropdown menu */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Categories
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Fiction
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  ABC
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                TEST
              </a>
            </li>

            {user ? (
              <li onClick={handleLogoutButton} className="nav-item">
                <button className="btn btn-danger">
                  <span>Logout</span>
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <Link to={"/login"}>
                  <span className="nav-link">Get Started</span>
                </Link>
              </li>
            )}
          </ul>

          {/* Search input and button */}
          <div style={{ display: "flex", marginTop: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{
                  width: "200px",
                  height: "40px",
                }}
              />
              <button
                style={{
                  marginLeft: "8px",
                  marginBottom: "16px",
                  borderRadius: "0.375rem",
                  width: "80px",
                  height: "40px",
                }}
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

{
  /* <Link to={"/admin/view"}>
  <span className="icon">
    <ion-icon name="home-outline"></ion-icon>
  </span>
  <span className="title">Dashboard</span>
</Link>; */
}
