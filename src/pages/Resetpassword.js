import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Resetpassword = () => {
  return (
    <>
      <Meta title={"Mabin | Reseteaza Parola"} />
      <BreadCrumb title="Reseteaza Parola" />
      <div className="login-wrapper home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
        <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mt-3 mb-3">Resetaza Parola</h3>
              <form action="" className="d-flex flex-column gap-15">
                <div className="mt-1">
                  <input
                    type="password"
                    name="password"
                    placeholder="Parola Noua"
                    className="form-control"
                  />
                </div>
                <input
                    type="password"
                    name="confpassword"
                    placeholder="Confirma Parola Noua"
                    className="form-control"
                  />
                <div>
                  <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                    <button className="button border-0">Reseteaza</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Resetpassword;
