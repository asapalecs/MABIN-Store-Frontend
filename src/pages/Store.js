import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";

const Store = () => {
  return (
    <>
      <Meta title={"Mabin | Magazin"} />
      <BreadCrumb title="Magazin" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Sorteaza dupa Categorie</h3>
                <div>
                  <ul className="ps-0">
                    <li>Laptop</li>
                    <li>TV</li>
                    <li>Camere</li>
                    <li>Ceasuri</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filtreaza dupa:</h3>
                <div>
                  <h5 className="sub-title">Disponibilitate</h5>
                  <div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id=""
                        value=""
                      />
                      <label className="form-check-label" htmlFor="">
                        In Stoc (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id=""
                        value=""
                      />
                      <label className="form-check-label" htmlFor="">
                        Stoc Epuizat (0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Pret</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="From"
                      />
                      <label htmlFor="floatingInput">De la</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput1"
                        placeholder="to"
                      />
                      <label htmlFor="floatingInput1">Pana la</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Culoare</h5>
                  <div>
                    <ul className="colors ps-0">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <h5 className="sub-title">Marime</h5>
                  <div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id=""
                        value="color-1"
                      />
                      <label className="form-check-label" htmlFor="color-1">
                        S (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id=""
                        value="color-2"
                      />
                      <label className="form-check-label" htmlFor="color-2">
                        M (1)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Tag-uri</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge text-secondary bg-light rounded-3 py-2 px-3">
                      Casti
                    </span>
                    <span className="badge text-secondary bg-light rounded-3 py-2 px-3">
                      Mobil
                    </span>
                    <span className="badge text-secondary bg-light rounded-3 py-2 px-3">
                      Laptop
                    </span>
                    <span className="badge text-secondary bg-light rounded-3 py-2 px-3">
                      TV
                    </span>
                    <span className="badge text-secondary bg-light rounded-3 py-2 px-3">
                      Tablete
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Produse aleatorii</h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50">
                      <h5>APPLE Watch Ultra Cellular, 49mm Titanium Case</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={5}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>4.599,00 lei</b>
                    </div>
                  </div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50">
                      <h5>APPLE Watch Ultra Cellular, 49mm Titanium Case</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={5}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>4.599,00 lei</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid">
                <div className="d-flex justify-content-between aling-items-center ">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block">Sorteaza dupa:</p>
                  <select name="" className="form-control form-select" id="">
                    <option value="manual">Recomandate</option>
                    <option value="best-selling" selected="selected">
                      Cele mai vandute
                    </option>
                    <option value="title-ascending">Alfabetic, A-Z</option>
                    <option value="price-ascending">
                      Pret, Scump - Ieftin
                    </option>
                    <option value="price-descending">
                      Pret, Ieftin - Scump
                    </option>
                    <option value="created-ascending">Data, Nou - Vechi</option>
                    <option value="created-descending">
                      Data, Vechi - Nou
                    </option>
                  </select>
                </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                <p className="total-products">21 Produse</p>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/gr.svg" className="d-block img-fluid" alt="grid" />
                  <img src="images/gr2.svg" className="d-block img-fluid" alt="grid" />
                  <img src="images/gr3.svg" className="d-block img-fluid" alt="grid" />
                  <img src="images/gr4.svg" className="d-block img-fluid" alt="grid" />
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
