import "../style/login.css";
import A from "../../assets/login.svg";
import B from "../../assets/signup.svg";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../axiosInstance";
import { useState } from "react";

const Login = () => {
  const containerRef = document.querySelector(".container");

  const handleSignUpClick = () => {
    containerRef.current.classList.add("sign-up-mode2");
  };

  const handleSignInClick = () => {
    containerRef.current.classList.remove("sign-up-mode2");
  };

  //state
  const navigate = useNavigate();

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  //usern,,, passs ,,, email,,,, role,,,
  const getProfile = async () => {
    const response = await axiosInstance
      .get("/profile")
      .then((res) => res?.data)
      .catch(() => null);

    if (response?.success) {
      localStorage.setItem("user", JSON.stringify(response?.response ?? ""));
      navigate("/admin/view");
    }
  };

  //login function
  //    /api/auth/login -> success
const handleClick = async () => {
  const response = await axiosInstance
    .post("/auth/login", { username, password })
    .then((res) => res?.data)
    .catch(() => null);

  if (response?.success) {
    localStorage.setItem("token", response?.response);
    getProfile();
  }
};

  //grab token putsomewhere
  // call /api/profile -> succ -> putsomewhere

  //register  -- /api/auth/register

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "#62605A",
      }}
    >
      <div className="cont">
        <div className="signin-signup">
          <form action="" className="sign-in-form">
            <h2 className="title">
              <b>Log in</b>
            </h2>

            {/* <!--Input field for Username --> */}
            <div className="input-field">
              <div className="input-cont">
                <i className="fas fa-user"></i>

                <input
                  type="text"
                  name="text"
                  required
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                />
              </div>
            </div>

            {/* <!--Input field for Password --> */}
            <div className="input-field">
              <div className="input-cont">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
            </div>

            <button type="button" className="btn" onClick={handleClick}>
              {" "}
              Login{" "}
            </button>
            <p className="account-text">
              Dont have an account?
              <a href="#" id="sign-up-btn2" onClick={handleSignInClick}>
                Sign up
              </a>
            </p>
          </form>

          {/* <!-- For SignUp --> */}
          <form action="" className="sign-up-form">
            <h2 className="title">
              <b>Sign up</b>
            </h2>

            {/* <!--Input field for Username --> */}
            <div className="input-field">
              <div className="input-cont">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
            </div>

            {/* <!--Input field for Email --> */}
            <div className="input-field">
              <div className="input-cont">
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="Email" />
              </div>
            </div>

            {/* <!--Input field for Password --> */}
            <div className="input-field">
              <div className="input-cont">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
            </div>

            <input type="submit" value="Sign up" className="btn" />
            <p className="account-text">
              Already have an account
              <a href="#" id="sign-in-btn2" onClick={handleSignUpClick}>
                Log in
              </a>
            </p>
          </form>




          
        </div>
        <div className="panels-cont">
          <div className="panel left-panel">
            <div className="content">
              <h3>Already Registered</h3>
              <p>Access your account via Login</p>
              <button
                className="btn"
                id="sign-in-btn"
                onClick={() => {
                  const cont = document.querySelector(".cont");
                  cont.classList.remove("sign-up-mode");
                }}
              >
                Log in
              </button>
            </div>

            <img src={B} alt="" className="image" />
          </div>

          <div className="panel right-panel">
            <div className="content">
              <h3>Dont have an account</h3>
              <p>Elevate your shopping experience with your personal account</p>
              <button
                className="btn"
                id="sign-up-btn"
                onClick={() => {
                  const cont = document.querySelector(".cont");
                  cont.classList.add("sign-up-mode");
                }}
              >
                Sign up
              </button>
            </div>
            <img src={A} alt="" className="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
