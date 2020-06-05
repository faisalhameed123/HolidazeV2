import React, { useState } from "react";
import { Link } from "react-router-dom";
import call from "../images/call.jpg";
import Redirect from "../components/Redirect";

const AdminSidebar = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const updateLogoutStatus = () => {
    sessionStorage.removeItem(`user`);
    sessionStorage.removeItem(`password`);
    setIsLoggedIn(false);
  };
  return (
    <>
      {sessionStorage.getItem(`user`) !== "admin" || isLoggedIn !== true ? (
        <Redirect loc="/SignIn" />
      ) : (
        <div className="AdminNavi">
          <div className="row AdminNavi__body col-md-12 col-xs-8 col-xs-offset-2 ">
            <div className="col-md-8 col-md-offset-2 ">
              <img src={call} alt="call" />
            </div>
            <div className="col-md-8 col-md-offset-2">
              <h3>Admin</h3>
            </div>
            <div className="col-md-8 col-md-offset-2">
              <Link to="/dashboard">
                <h4>Add Establishment</h4>
              </Link>
            </div>
            <div className="col-md-8 col-md-offset-2">
              <Link to="/est-record">
                <h4>Establishment-Record</h4>
              </Link>
            </div>
            <div className="col-md-8 col-md-offset-2">
              <Link to="/record">
                <h4>Enquiry-Record</h4>
              </Link>
            </div>
            <div className="col-md-8 col-md-offset-2">
              <Link to="/admincontact">
                <h4>Contact-Record</h4>
              </Link>
            </div>
            <div className="col-md-8 col-md-offset-2">
              <button className="logButt" onClick={updateLogoutStatus}>
                <h4>Logout</h4>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default AdminSidebar;
