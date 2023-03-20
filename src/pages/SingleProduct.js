import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactImageZoom from "react-image-zoom";

const SingleProduct = () => {
  const [orderedProduct] = useState(true);
  const props = {
    width: 400,
    height: 500,
    zoomWidth: 500,
    img: "https://s.yimg.com/uu/api/res/1.2/2jmYiditumSjipyClueILw--~B/aD0xMzMzO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-09/858128d0-3491-11ed-aeec-c03b39ac030c.cf.webp",
  };
  return (
    <>
      <Meta title={"Mabin | Nume Produs"} />
      <BreadCrumb title="Nume Produs" />
      <div className="main-product-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div className="">
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img
                    src="https://s.yimg.com/uu/api/res/1.2/2jmYiditumSjipyClueILw--~B/aD0xMzMzO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-09/858128d0-3491-11ed-aeec-c03b39ac030c.cf.webp"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://s.yimg.com/uu/api/res/1.2/2jmYiditumSjipyClueILw--~B/aD0xMzMzO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-09/858128d0-3491-11ed-aeec-c03b39ac030c.cf.webp"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://s.yimg.com/uu/api/res/1.2/2jmYiditumSjipyClueILw--~B/aD0xMzMzO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-09/858128d0-3491-11ed-aeec-c03b39ac030c.cf.webp"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://s.yimg.com/uu/api/res/1.2/2jmYiditumSjipyClueILw--~B/aD0xMzMzO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-09/858128d0-3491-11ed-aeec-c03b39ac030c.cf.webp"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
      <div className="description-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Descriere</h4>
              <div className="desc bg-white p-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi voluptates nihil beatae esse sequi illum ut
                  deleniti? Quas, consequatur natusLorem ipsum dolor sit amet
                  consectetur adipisicing elit. Excepturi voluptates nihil
                  beatae esse sequi illum ut deleniti? Quas, consequatur natus
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3>Recenzii</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Recenziile clientilor</h4>
                    <div className="d-flex gap-10 align-items-center">
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Bazat pe 2 recenzii</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a
                        href="/"
                        className="text-dark text-decoration-underline"
                      >
                        Lasa o recenzie
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4>Lasa o recenzie</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        cols="30"
                        rows="4"
                        className="form-control w-100"
                        placeholder="Comentariu..."
                      />
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Posteaza</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-3">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Matei Popescu</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maiores libero magnam delectus iste, doloribus quo ut nisi
                      illum mollitia harum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2  ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Produse populare</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
