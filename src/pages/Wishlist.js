import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Mabin | Favorite"} />
      <BreadCrumb title="Favorite" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/watch.jpg"
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                  Laptop APPLE MacBook Pro 16, Apple M2 Pro, 16.2" Liquid Retina XDR, 16GB, SSD 512GB
                </h5>
                <h6 className="price">1.529,99 lei</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/watch.jpg"
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                  Laptop APPLE MacBook Pro 16, Apple M2 Pro, 16.2" Liquid Retina XDR, 16GB, SSD 512GB
                </h5>
                <h6 className="price">1.529,99 lei</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/watch.jpg"
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                  Laptop APPLE MacBook Pro 16, Apple M2 Pro, 16.2" Liquid Retina XDR, 16GB, SSD 512GB
                </h5>
                <h6 className="price">1.529,99 lei</h6>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
