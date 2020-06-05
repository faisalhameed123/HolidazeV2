import React, { useState } from "react";
import FooterComponent from "../components/footer";
import AccomComponent from "../components/Accom";
import Header from "../components/header";
import Estresp from "../server/establishments.json";

export default function Accomodations(props) {
  const [filterResults, setfilter] = useState([]);
  const [isResultFiltered, setIsResultfilt] = useState(false);
  let filterApi = Estresp;
  const handleSubmit = (input) => {
    input.preventDefault();

    filterApi = filterApi.filter((value) => {
      return value.establishmentName
        .toLowerCase()
        .includes(input.target.value.toLowerCase());
    });
    setfilter(filterApi);
    setIsResultfilt(true);
  };
  const price0T1FilterMethod = (input) => {
    if (input.target.checked) {
      filterApi = filterApi.filter((value) => {
        return value.price >= 0 && value.price <= 1000;
      });
      setfilter(filterApi);
      setIsResultfilt(true);
    }
  };
  const price1T2FilterMethod = (input) => {
    if (input.target.checked) {
      filterApi = filterApi.filter((value) => {
        return value.price > 1000 && value.price <= 2000;
      });
      setfilter(filterApi);
      setIsResultfilt(true);
    }
  };
  const maxguest0T1FilterMethod = (input) => {
    if (input.target.checked) {
      filterApi = filterApi.filter((value) => {
        return value.maxGuests >= 0 && value.maxGuests <= 10;
      });
      setfilter(filterApi);
      setIsResultfilt(true);
    }
  };
  const maxguest1T2FilterMethod = (input) => {
    if (input.target.checked) {
      filterApi = filterApi.filter((value) => {
        return value.maxGuests > 10 && value.maxGuests <= 20;
      });
      setfilter(filterApi);
      setIsResultfilt(true);
    }
  };
  const selfCatYesFilterMethod = (input) => {
    if (input.target.checked) {
      filterApi = filterApi.filter((value) => {
        return (value.selfCatering === "true");
      });
      setfilter(filterApi);
      setIsResultfilt(true);
    }
  };
  const selfCatNoFilterMethod = (input) => {
    if (input.target.checked) {
      filterApi = filterApi.filter((value) => {
        return (value.selfCatering === "false");
      });
      setfilter(filterApi);
      setIsResultfilt(true);
    }
  };
  return (
    <>
      <div className="accoCont">
        <Header />
        <form>
          <div className="row searcharea col-md-8 col-md-offset-2">
            <div className="col-md-12 form-group">
              <input
                className="form-control"
                onChange={handleSubmit}
                name="searchPhrase"
                type="text"
                placeholder="Search by name"
                id="dest"
              ></input>
              <button className="btn btn-primary">
                <h4>Search</h4>
              </button>
            </div>
          </div>
        </form>
        <div className="row col-md-12 col-xs-12">
          <div className="col-md-1"></div>
          <div className="col-md-2 col-xs-4 accoCont__accomheading">
            <h2>Bed&Breakfast</h2>
          </div>
          <div className="col-md-2 col-xs-4 accoCont__accomheading">
            <h2>Hotel</h2>
          </div>
          <div className="col-md-2 col-xs-4 accoCont__accomheading">
            <h2>Guesthouse</h2>
          </div>
          <div className="col-md-5"></div>
        </div>
        <div className="row accoCont__body">
          <div className="col-md-9">
            {isResultFiltered
              ? filterResults.map((data, index) => {
                  return (
                    <AccomComponent
                      key={index}
                      id={data.id}
                      imageUrl={data.imageUrl}
                      name={data.establishmentName}
                      price={data.price}
                    />
                  );
                })
              : Estresp.map((data, index) => {
                  return (
                    <AccomComponent
                      key={index}
                      id={data.id}
                      imageUrl={data.imageUrl}
                      name={data.establishmentName}
                      price={data.price}
                    />
                  );
                })}
          </div>
          <div className="col-md-3 accoCont__sideBar">
            <div className="row col-md-12">
              <div className="row accoCont__sideBar__heading">
                <h3>Prices</h3>
              </div>
              <div className="row col-md-12 col-xs-12 accoCont__sideBar__body">
                <div className="row">
                  <div className="col-md-4 col-xs-4 accoCont__sideBar__body--check">
                    <label>
                      <input type="checkbox" onClick={price0T1FilterMethod} />
                    </label>
                  </div>
                  <div className="col-md-8 col-xs-8 accoCont__sideBar__body--price">
                    <h3>0-1000</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 col-xs-4 accoCont__sideBar__body--check">
                    <input type="checkbox" onClick={price1T2FilterMethod} />
                  </div>
                  <div className="col-md-8 col-xs-8 accoCont__sideBar__body--price">
                    <h3>1000-2000</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="row col-md-12">
              <div className="row accoCont__sideBar__heading">
                <h3>Max Guests</h3>
              </div>
              <div className="row col-md-12 col-xs-12 accoCont__sideBar__body">
                <div className="row">
                  <div className="col-md-4 col-xs-4 accoCont__sideBar__body--check">
                    <input type="checkbox" onClick={maxguest0T1FilterMethod} />
                  </div>
                  <div className="col-md-8 col-xs-8 accoCont__sideBar__body--amount">
                    <h3>0-10</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 col-xs-4 accoCont__sideBar__body--check">
                    <input type="checkbox" onClick={maxguest1T2FilterMethod} />
                  </div>
                  <div className="col-md-8 col-xs-8 accoCont__sideBar__body--amount">
                    <h3>10-20</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="row col-md-12">
              <div className="row accoCont__sideBar__heading">
                <h3>Self Catering</h3>
              </div>
              <div className="row col-md-12 col-xs-12 accoCont__sideBar__body">
                <div className="row">
                  <div className="col-md-4 col-xs-4 accoCont__sideBar__body--check">
                    <input type="checkbox" onClick={selfCatYesFilterMethod} />
                  </div>
                  <div className="col-md-8 col-xs-8 accoCont__sideBar__body--booleon">
                    <h3>Yes</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 col-xs-4 accoCont__sideBar__body--check">
                    <input type="checkbox" onClick={selfCatNoFilterMethod} />
                  </div>
                  <div className="col-md-8 col-xs-8  accoCont__sideBar__body--booleon">
                    <h3>No</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    </>
  );
}
