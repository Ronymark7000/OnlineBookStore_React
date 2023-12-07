import "../style/sidebar.css";
import { useEffect } from "react";
import Prof from "../../assets/profile.png";
import { Link } from "react-router-dom";
import { handleLogout } from "../../services/starWarsCharater";

const AdminSidebar = () => {
  useEffect(() => {
    // Function to handle the "mouseover" event on navigation items
    const activeLink = (event) => {
      const list = document.querySelectorAll(".navigation li");
      list.forEach((item) => {
        item.classList.remove("hovered");
      });
      event.target.classList.add("hovered");
    };

    // Add "mouseover" event listeners to navigation items
    const navigationItems = document.querySelectorAll(".navigation li");
    navigationItems.forEach((item) =>
      item.addEventListener("mouseover", activeLink)
    );

    // Function to handle menu toggle
    const handleToggle = () => {
      const navigation = document.querySelector(".navigation");
      const main = document.querySelector(".main");
      navigation.classList.toggle("active");
      main.classList.toggle("active");
    };

    // Add click event listener to the toggle button
    const toggleButton = document.querySelector(".toggle");
    toggleButton.addEventListener("click", handleToggle);

    // Cleanup event listeners on component unmount
    return () => {
      navigationItems.forEach((item) =>
        item.removeEventListener("mouseover", activeLink)
      );
      toggleButton.removeEventListener("click", handleToggle);
    };
  }, []);

  return (
    <>
      <div className="first">
        <div className="container1">
          <div className="navigation">
            <ul>
              <li>
                <a>
                  <span className="icon">
                    <b>
                      <ion-icon name="book-outline"></ion-icon>
                    </b>
                  </span>
                  <span className="title" style={{ fontSize: "26px" }}>
                    <b>BookStore</b>
                  </span>
                </a>
              </li>

              <li>
                <Link to={"/admin"}>
                  <span className="icon">
                    <ion-icon name="home-outline"></ion-icon>
                  </span>
                  <span className="title">Dashboard</span>
                </Link>
              </li>

              <li>
                <Link to={"/admin/add-books"}>
                  <span className="icon">
                    <ion-icon name="add-circle-outline"></ion-icon>
                  </span>
                  <span className="title">Add Books</span>
                </Link>
              </li>

              <li>
                <Link to={"/admin/update-book"}>
                  <span className="icon">
                    <ion-icon name="push-outline"></ion-icon>
                  </span>
                  <span className="title">Update Books</span>
                </Link>
              </li>

              <li>
                <Link to="/admin/book-dashboard">
                  <span className="icon">
                    <ion-icon name="file-tray-stacked-outline"></ion-icon>
                  </span>
                  <span className="title">View all</span>
                </Link>
              </li>

              <li>
                <Link to="/admin/orders">
                  <span className="icon">
                    <ion-icon name="receipt-outline"></ion-icon>
                  </span>
                  <span className="title">Customer Order</span>
                </Link>
              </li>

              <li>
                <Link to={"/admin/user-dashboard"}>
                  <span className="icon">
                    <ion-icon name="people-outline"></ion-icon>
                  </span>
                  <span className="title">Customer Details</span>
                </Link>
              </li>

              <li>
                <Link to={"/admin/add-user"}>
                  <span className="icon">
                    <ion-icon name="person-add-outline"></ion-icon>
                  </span>
                  <span className="title">Add Customer</span>
                </Link>
              </li>

              <li>
                <Link to={"/admin/update-user"}>
                  <span className="icon">
                    <ion-icon name="accessibility-outline"></ion-icon>
                  </span>
                  <span className="title">Edit Customer Details</span>
                </Link>
              </li>

              <li>
                <Link to="/admin/review">
                  <span className="icon">
                    <ion-icon name="megaphone-outline"></ion-icon>
                  </span>
                  <span className="title">Feedbacks</span>
                </Link>
              </li>

              <li>
                <Link to="/">
                  <span className="icon">
                    <ion-icon name="desktop-outline"></ion-icon>
                  </span>
                  <span className="title">Webpage</span>
                </Link>
              </li>

              <li>
                <Link to="#" onClick={handleLogout}>
                  <span className="icon">
                    <ion-icon name="exit-outline"></ion-icon>
                  </span>
                  <span className="title">Sign Out</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="main">
          <div className="topbar">
            <div className="toggle">
              <ion-icon name="menu-outline"></ion-icon>
            </div>

            <div className="rate" style={{ pointerEvents: "all" }}>
              <label>
                <input type="text" placeholder="Search here" />
                <ion-icon name="search-outline"></ion-icon>
              </label>
            </div>

            {/* Image For profile Pic */}
            <div className="user">
              <img src={Prof} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
