import React from "react";
import FooterComponent from "../components/footer";
import AdminSidebar from "../components/adminSide";
import Header from "../components/header";
import ContData from "../server/contact";

const AdminContact = (props) => {
  return (
    <>
      <div className="adminCont">
        <Header />
        <div className="row">
          <div className="col-md-4">
            <AdminSidebar />
          </div>
          <div className="col-md-7">
            <div className=" adminCont__adminTable">
              <div className="row col-md-12">
                <h2>Dashboard / Contacts</h2>
              </div>

              <table className=" table table-bordered table-hover table-wrapper-scroll-y table-striped">
                <thead>
                  <tr>
                    <th>A-ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                  </tr>
                </thead>

                {ContData === null ? (
                  <h2>no record</h2>
                ) : (
                  ContData.map((data, index) => {
                    return (
                      <tbody key ={index}>
                        <tr>
                          <td>{index + 1}</td>
                          <td>{data.clientName}</td>
                          <td>{data.email}</td>
                          <td>{data.message}</td>
                        </tr>
                      </tbody>
                    );
                  }).reverse()
                )}
              </table>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
        <FooterComponent />
      </div>
    </>
  );
};
export default AdminContact;
