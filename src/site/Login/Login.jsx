import "../style/login.css";
import A from "../../assets/login.svg";
import B from "../../assets/signup.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleLogin, handleSignup } from "../../services/starWarsCharater";

const Login = () => {
  const containerRef = document.querySelector(".container");

  const [formType, setFormType] = useState("login");

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
  const [email, setEmail] = useState("");

  //login function
  //    /api/auth/login -> success
  const handleClick = async () => {
    if (formType === "login") {
      const response = await handleLogin(username, password);
      console.log(response?.response?.role);
      console.log(response?.success);

      if (response?.success) {
        response?.response?.role === "admin"
          ? navigate("/admin")
          : navigate("/");
      }

      //If the user is admin changes into admin page
    } else {
      const response = await handleSignup(username, password, email);
      response?.success && handleLoginModel();
    }
  };

  const handleLoginModel = () => {
    const cont = document.querySelector(".cont");
    cont.classList.remove("sign-up-mode");
    setFormType("login");
  };

  const handleSignupModel = () => {
    const cont = document.querySelector(".cont");
    cont.classList.add("sign-up-mode");
    setFormType("signup");
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
              Login
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
            {/* <!--Input field for Email --> */}
            <div className="input-field">
              <div className="input-cont">
                <i className="fas fa-lock"></i>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* <input type="submit" value="Sign up" className="btn" /> */}
            <button className="btn" type="button" onClick={handleClick}>
              Sign up
            </button>
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
                onClick={handleLoginModel}
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
                onClick={handleSignupModel}
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
