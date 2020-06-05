import React, { useState } from "react";
import FooterComponent from "../components/footer";
import Header from "../components/header";

export default function Contact(props) {
  const [NameError, setNameError] = useState(true);
  const [EmailError, setEmailError] = useState(true);
  const [MessageError, setMessageError] = useState(true);
  const emailPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const namePattern = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
  const [counter, setCounter] = useState(0);

  const nameCheck = (value) => {
    if (value === "") {
      return false;
    } else {
      if (namePattern.test(value)) {
        return true;
      } else {
        return false;
      }
    }
  };
  const emailCheck = (value) => {
    if (value === "") {
      return false;
    } else {
      if (emailPattern.test(value)) {
        return true;
      } else {
        return false;
      }
    }
  };
  const messageCheck = (value) => {
    if (value === "") {
      return false;
    } else {
      return true;
    }
  };
  const handleSubmit = (input) => {
    input.preventDefault();
    if (counter === 0) {
      setCounter(1);
    }
    let name = input.target.name;
    let value = input.target.value;

    switch (name) {
      case "clientName":
        if (nameCheck(value)) {
          setNameError(false);
        } else {
          setNameError(true);
        }
        break;
      case "email":
        if (emailCheck(value)) {
          setEmailError(false);
        } else {
          setEmailError(true);
        }
        break;
      case "message":
        if (messageCheck(value)) {
          setMessageError(false);
        } else {
          setMessageError(true);
        }
        break;

      default:
        break;
    }
  };
  return (
    <>
      <div className="conCont">
        <Header />
        <div className="row">
          <div className="col-md-4 col-md-offset-4 col-xs-8 col-xs-offset-2 conCont__contForm">
            <h2>Contact form</h2>
            <form
              method="POST"
              action="http://localhost:8080/HOLIDAZE/client/src/server/contact-success.php"
            >
              <div className="row col-md-12 conCont__contForm__name">
                <div className="col-md-3 col-xs-3">
                  <label htmlFor="clientName">Fullname</label>
                </div>
                <div className="col-md-9 col-xs-9">
                  <input
                    type="text"
                    onChange={handleSubmit}
                    name="clientName"
                    id="name"
                  />
                  <p
                    className={
                      NameError && counter === 1 ? "error" : "error__hide"
                    }
                  >
                    Full Name Required
                  </p>
                </div>
              </div>
              <div className="row col-md-12 conCont__contForm__email">
                <div className="col-md-3 col-xs-3">
                  <label htmlFor="email">Email</label>
                </div>
                <div className="col-md-9 col-xs-9">
                  <input
                    type="text"
                    onChange={handleSubmit}
                    name="email"
                    id="email"
                  />
                  <p
                    className={
                      EmailError && counter === 1 ? "error" : "error__hide"
                    }
                  >
                    Email Invalid
                  </p>
                </div>
              </div>
              <div className="row col-md-12 conCont__contForm__message">
                <div className="col-md-4 col-xs-4">
                  <label htmlFor="message">Message</label>
                </div>
                <div className="col-md-8 col-xs-8">
                  <textarea
                    name="message"
                    onChange={handleSubmit}
                    id="message"
                    rows="3"
                    cols="20"
                  ></textarea>
                  <p
                    className={
                      MessageError && counter === 1 ? "error" : "error__hide"
                    }
                  >
                    Invalid message
                  </p>
                </div>
              </div>
              <div className="row col-md-4 col-md-offset-4 col-xs-4 col-xs-offset-4 conCont__contForm__submit">
                <button
                  className={
                    NameError || EmailError || MessageError
                      ? "disabled"
                      : "enable"
                  }
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <FooterComponent />
      </div>
    </>
  );
}

