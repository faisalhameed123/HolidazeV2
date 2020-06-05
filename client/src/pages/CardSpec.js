import React from "react";
import FooterComponent from "../components/footer";
import CardSpecComponent from "../components/cardSpecDetail";
import Estresp from "../server/establishments.json";
import Header from "../components/header";

export default function CardSpecific(props) {
  const filterPara = props.match.params.id;

  return (
    <>
      <div className="SpecCont">
        <Header />
        <div className="row">
          <div className="col-md-8 col-md-offset-2 ">
            {filterPara !== null ? (
              Estresp.map((data) => {
                if (filterPara === data.id) {
                  return (
                    <CardSpecComponent
                      key={data.id}
                      id={data.id}
                      imageUrl={data.imageUrl}
                      name={data.establishmentName}
                      price={data.price}
                      maxGuests={data.maxGuests}
                      selfCatering={data.selfCatering ? "Yes" : "No"}
                      description={data.description}
                    />
                  );
                }
                return null;
              })
            ) : (
              <h2>no post found</h2>
            )}
          </div>
        </div>
        <FooterComponent />
      </div>
    </>
  );
}
