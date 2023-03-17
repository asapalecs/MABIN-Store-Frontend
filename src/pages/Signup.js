import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <Meta title={"Mabin | Inregistrare"} />
      <BreadCrumb title="Inregistrare" />
      <div className="login-wrapper home-wrapper-2 py-5">
      <div className="container-xxl">
      <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mt-3 mb-5">Inregistrare</h3>
              <form action="" className="d-flex flex-column gap-15">
                <div className="d-flex align-items-center">
                  <input
                    type="text"
                    name="nume"
                    placeholder="Nume"
                    className="form-control"
                  />
                  <input
                    type="text"
                    name="prenume"
                    placeholder="Prenume"
                    className="form-control"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="number"
                    placeholder="Telefon"
                    className="form-control"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div className="mt-1">
                  <input
                    type="password"
                    name="password"
                    placeholder="Parola"
                    className="form-control"
                  />
                </div>
                <div>
                  <Link to="/login">Ai deja cont?</Link>
                  <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                    <button className="button border-0">Inregistreaza-te</button>
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

export default Signup;
