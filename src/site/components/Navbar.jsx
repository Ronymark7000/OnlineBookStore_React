import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleLogout } from "../../services/starWarsCharater";

function Navbar() {
  const navigate = useNavigate();
  // State to manage the navbar's openness
  const [isOpen, setIsOpen] = useState(false);

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || ""
  );

  // Function to toggle the navbar's openness
  const toggle = () => setIsOpen(!isOpen);

  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search?.length > 0) {
      setSearch("");
      navigate(`?page=1&query=${search}`);
    }
  };

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
                value={search}
                onChange={(e) => setSearch(e.target.value)}
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
                onClick={handleSearch}
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
