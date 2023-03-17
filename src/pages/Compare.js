import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
import Meta from "../components/Meta";

const Compare = () => {
  return (
    <>
      <Meta title={"Mabin | Compara Produse"} />
      <BreadCrumb title="Compara Produse" />
      <div className="compare-product-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="cross position-absolute img-fluid"
                />
                <div className="product-image">
                  <img src="images/watch.jpg" alt="watch" />
                  <div className="compare-details">
                    <h5 className="title">
                      Laptop APPLE MacBook Pro 16, Apple M2 Pro, 16.2" Liquid
                      Retina XDR, 16GB, SSD 512GB
                    </h5>
                    <h6 className="price mt-3">14.493,90 lei</h6>
                    <div className="product-detail">
                      <h5>Brand:</h5>
                      <p>APPLE</p>
                    </div>
                    <div className="product-detail">
                      <h5>Tip:</h5>
                      <p>Ceas</p>
                    </div>
                    <div className="product-detail">
                      <h5>Disponibilitate:</h5>
                      <p>In Stoc</p>
                    </div>
                    <div className="product-detail">
                      <h5>Culoare:</h5>
                      <Color />
                    </div>
                    <div className="product-detail">
                      <h5>Marime:</h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="cross position-absolute img-fluid"
                />
                <div className="product-image">
                  <img src="images/watch.jpg" alt="watch" />
                  <div className="compare-details">
                    <h5 className="title">
                      Laptop APPLE MacBook Pro 16, Apple M2 Pro, 16.2" Liquid
                      Retina XDR, 16GB, SSD 512GB
                    </h5>
                    <h6 className="price mt-3">14.493,90 lei</h6>
                    <div className="product-detail">
                      <h5>Brand:</h5>
                      <p>APPLE</p>
                    </div>
                    <div className="product-detail">
                      <h5>Tip:</h5>
                      <p>Ceas</p>
                    </div>
                    <div className="product-detail">
                      <h5>Disponibilitate:</h5>
                      <p>In Stoc</p>
                    </div>
                    <div className="product-detail">
                      <h5>Culoare:</h5>
                      <Color />
                    </div>
                    <div className="product-detail">
                      <h5>Marime:</h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
};

//5:42:00 / 10:17:44

export default Compare;
