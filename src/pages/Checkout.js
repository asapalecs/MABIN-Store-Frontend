import React from "react";

const Checkout = () => {
  return (
    <>
      <div className="checkout-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">MABIN</h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    &nbsp; /
                    <li className="breadcrumb-item active" aria-current="page">
                      Library
                    </li>
                  </ol>
                </nav>
                <h4 className="title">Contact INFO</h4>
                <p className="user-details">
                  Ion Popescu (ionpopescu@gmail.com)
                </p>
                <form
                  action=""
                  className="d-flex gap-15 flex-wrap justify-content-between"
                >
                  <div className="w-100">
                    <select
                      name=""
                      className="form-control form-select"
                      id=""
                    >
                    <option value="" selected disabled>Selecteaza Regiunea</option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input type="text" placeholder="Nume" className="form-control" id="" />
                  </div>
                  <div className="flex-grow-1">
                    <input type="text" placeholder="Prenume" className="form-control" id="" />
                  </div>
                  <div className="w-100">
                    <input type="text" placeholder="Adresa" className="form-control" id="" />
                  </div>
                  <div className="w-100">
                    <input type="text" placeholder="Etaj, Apartament etc." className="form-control" id="" />
                  </div>
                  <div className="flex-grow-1">
                    <input type="text" placeholder="Oras" className="form-control" id="" />
                  </div>
                  <div className="flex-grow-1">
                    <select
                      name=""
                      className="form-control form-select"
                      id=""
                    >
                    <option value="" selected disabled>Selecteaza Tara</option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input type="text" placeholder="Cod Postal" className="form-control" id="" />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
