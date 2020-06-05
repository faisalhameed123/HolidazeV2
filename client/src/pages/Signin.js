import React, { useState } from "react";
import FooterComponent from "../components/footer";
import Header from "../components/header";
import Dashboard from "../pages/Add-estab";

export default function SignIn(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userNameError, setUserNameError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);
  const [counter, setCounter] = useState(0);

  const updateLoginStatus = () => {
    sessionStorage.setItem(`user`, "admin");
    sessionStorage.setItem(`password`, "admin123");
    if (
      sessionStorage.getItem("user") === "admin" &&
      sessionStorage.getItem("password") === "admin123"
    ) {
      setIsLoggedIn(true);
    }
  };

  const handleChange = (input) => {
    if (counter === 0) {
      setCounter(1);
    }
    let name = input.target.name;
    let value = input.target.value;
    switch (name) {
      case "userName":
        value === "admin" ? setUserNameError(false) : setUserNameError(true);
        break;
      case "password":
        value === "admin123" ? setPasswordError(false) : setPasswordError(true);
        break;
      default:
    }
  };

  const handleSubmit = () => {
    if (passwordError === false && userNameError === false) {
      sessionStorage.setItem(`user`, "admin");
      sessionStorage.setItem(`password`, "admin123");
      updateLoginStatus();
    } else {
      alert("Username or password is incorrect");
    }
  };

  return (
    <>
      {!isLoggedIn ? (
        <div className="signCont">
          <Header />
          <div className="row">
            <div className="col-md-4 col-md-offset-4 signCont__signForm">
              <h2>Sign In</h2>
              <form onSubmit={handleSubmit}>
                <div className="row col-md-12 signCont__signForm__name">
                  <div className="col-md-3">
                    <label htmlFor="userName">Username</label>
                  </div>
                  <div className="col-md-9">
                    <input
                      type="text"
                      onChange={handleChange}
                      name="userName"
                      className="userName form-control"
                      id="userName"
                    />
                    <p
                      className={
                        userNameError === true && counter === 1
                          ? "error"
                          : "error__hide"
                      }
                    >
                      username is incorrect
                    </p>
                  </div>
                </div>
                <div className="row col-md-12 signCont__signForm__pass">
                  <div className="col-md-3">
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className="col-md-9">
                    <input
                      type="text"
                      onChange={handleChange}
                      name="password"
                      className="password form-control"
                      id="password"
                    />
                    <p
                      className={
                        passwordError === true && counter === 1
                          ? "error"
                          : "error__hide"
                      }
                    >
                      password is incorrect
                    </p>
                  </div>
                </div>
                <div className="row col-md-4 col-md-offset-4 signCont__signForm__submit">
                  <button>Submit</button>
                </div>
              </form>
            </div>
          </div>
          <FooterComponent />
        </div>
      ) : (
        <Dashboard loginStatus={isLoggedIn} />
      )}
    </>
  );
}
