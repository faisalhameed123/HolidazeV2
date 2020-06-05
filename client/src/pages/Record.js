import React from "react";
import FooterComponent from "../components/footer";
import AdminSidebar from "../components/adminSide";
import Header from "../components/header";
import EnqData from "../server/enquiries";

const Record = (props) => {
  return (
    <>
      <div className="recordCont">
        <div className="row">
          <Header />
          <div className="col-md-4">
            <AdminSidebar />
          </div>
          <div className="col-md-7 col-xs-12 recordCont__recordTable">
            <div className="row col-md-12">
              <h2>Dashboard / Enquiry record</h2>
            </div>
            <table className="table table-bordered table-hover table-wrapper-scroll-y table-striped">
              <thead>
                <tr>
                  <th>EQ-ID</th>
                  <th>Establishment</th>
                  <th>Full name</th>
                  <th>Email</th>
                  <th>Check in</th>
                  <th>Check out</th>
                  <th>Adult</th>
                  <th>Children</th>
                  <th>Note</th>
                </tr>
              </thead>
              {EnqData === null ? (
                <h2>no record</h2>
              ) : (
                EnqData.map((data, index) => {
                  return (
                    <tbody key = {index}>
                      <tr>
                        <td>{index++}</td>
                        <td>{data.establishment}</td>
                        <td>{data.clientName}</td>
                        <td>{data.email}</td>
                        <td>{data.checkin}</td>
                        <td>{data.checkout}</td>
                        <td>{data.adults}</td>
                        <td>{data.children}</td>
                        <td>{data.notes}</td>
                      </tr>
                    </tbody>
                  );
                }).reverse()
              )}
            </table>
          </div>
          <div className="col-md-1"></div>
        </div>
        <FooterComponent />
      </div>
    </>
  );
};
export default Record;
