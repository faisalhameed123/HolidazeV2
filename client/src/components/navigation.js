import React from "react";
import { Link } from "react-router-dom";
import headingtree from "../icons/tree.png";
import face from "../icons/facebook-new.png";
import twitt from "../icons/twitter.png";
import insta from "../icons/instagram.png";
import trip from "../icons/tripadvisor.png";
import phone from "../icons/phone.png";

const NavComponent = (props) => {
  return (
    <>
      <div className="row navi">
        <div className="col-md-3">
          <div className="col-md-3 col-xs-2 navi__socialIcons">
            <img src={phone} alt="phone" />
          </div>
          <div className="col-md-5 col-xs-3 navi__heading">
            <h6>0047-92698012</h6>
          </div>

          <div className="col-md-4 col-xs-7 navi__heading">
            <Link className="signLink" to="/signin">
              <h6>Sign in</h6>
            </Link>
          </div>
        </div>

        <div className="col-md-6"></div>
        <div className="col-md-3">
          <div className="col-md-3"></div>
          <div className="col-md-2 navi__socialIcons">
            <Link to="faceb">
              <img src={face} alt="faceIcon"></img>
            </Link>
          </div>
          <div className="col-md-2 navi__socialIcons">
            <Link to="twitte">
              <img src={twitt} alt="twittIcon"></img>
            </Link>
          </div>
          <div className="col-md-2 navi__socialIcons">
            <Link to="instag">
              <img src={insta} alt="instaIcon"></img>
            </Link>
          </div>
          <div className="col-md-3 navi__socialIcons">
            <Link to="tripm">
              <img src={trip} alt="tripIcon"></img>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-xs-8 col-xs-offset-2">
            <div className="col-md-4 col-xs-3 navi__treeIcon">
              <img src={headingtree} alt="heading"></img>
            </div>
            <div className="col-md-8 col-xs-9 navi__heading">
              <h1>Holidaze</h1>
            </div>
          </div>
        </div>
        <div className="row navi__heading ">
          <div className="col-md-4 col-md-offset-4">
            <div className="col-md-4">
              <Link className="pageLink" to="/">
                <h4>Home</h4>
              </Link>
            </div>
            <div className="col-md-4">
              <Link className="accoLink" to="/accomodations">
                <h4>Accomodations</h4>
              </Link>
            </div>
            <div className="col-md-4">
              <Link className="conLink" to="/contact">
                <h4>Contact</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavComponent;
