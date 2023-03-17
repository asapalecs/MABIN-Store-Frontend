import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

const Forgotpassword = () => {
  return (
    <>
      <Meta title={"Mabin | Recuperare Cont"} />
      <BreadCrumb title="Recuperare Cont" />
      <div className="login-wrapper home-wrapper-2 py-5">
      <div className="container-xxl">
      <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reseteaza-ti parola</h3>
              <p className="text-center mt-2 mb-3">
                Iti vom trimite un link pentru a reseta parola.
              </p>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div>
                  <div className="mt-3 d-flex justify-content-center align-items-center  flex-column gap-15">
                    <button to="/reseteaza-parola" className="button border-0" type="submit">
                      Trimite Link
                    </button>
                    <Link to="/login">Inapoi</Link>
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

export default Forgotpassword;
