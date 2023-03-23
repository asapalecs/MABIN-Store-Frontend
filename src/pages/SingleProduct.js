import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { BiGitCompare, BiStar } from "react-icons/bi";

const SingleProduct = () => {
  const [orderedProduct] = useState(true);
  const props = {
    width: 600,
    height: 600,
    zoomWidth: 500,
    img: "https://s.yimg.com/uu/api/res/1.2/2jmYiditumSjipyClueILw--~B/aD0xMzMzO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-09/858128d0-3491-11ed-aeec-c03b39ac030c.cf.webp",
  };
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
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
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">APPLE Watch SE 2 GPS</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">1.529,99 lei</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review">(2 recenzii)</p>
                  </div>
                  <a className="review-btn" href="#review">
                    Lasa o recenzie
                  </a>
                </div>
                <div className="border-bottom py-3">
                  <div className="d-flex align-items-center gap-10 my-2">
                    <h3 className="product-heading">Brand: </h3>
                    <p className="product-data">Apple</p>
                  </div>
                  <div className="d-flex align-items-center gap-10 my-2">
                    <h3 className="product-heading">Categorie: </h3>
                    <p className="product-data">Ceasuri</p>
                  </div>
                  <div className="d-flex align-items-center gap-10 my-2">
                    <h3 className="product-heading">Tag-uri: </h3>
                    <p className="product-data">ceas</p>
                  </div>
                  <div className="d-flex align-items-center gap-10 my-2">
                    <h3 className="product-heading">Disponibilitate:</h3>
                    <p className="product-data">In stoc</p>
                  </div>
                  <div className="d-flex flex-column gap-10 my-2 mb-3">
                    <h3 className="product-heading">Marime: </h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        S
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        M
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        L
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-10 my-2 mb-3">
                    <h3 className="product-heading">Culoare: </h3>
                    <Color />
                  </div>
                  <div className="d-flex align-items-center gap-15 my-2 mb-3 flex-row mt-2">
                    <h3 className="product-heading">Cantitate: </h3>
                    <div className="">
                      <input
                        className="form-control"
                        type="number"
                        defaultValue={0}
                        min={0}
                        max={10}
                        style={{ width: "60px" }}
                        name=""
                        id=""
                      />
                    </div>
                    <div className="d-flex align-items-center gap-15 ms-5">
                      <button className="button border-0">Adauga</button>
                      <button className="button signup">Cumpara Acum</button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <a href="/">
                        <BiGitCompare className="fs-5 ms-2" /> Compara
                      </a>
                    </div>
                    <div>
                      <a href="/">
                        <BiStar className="fs-5 ms-2" /> Adauga la Favorite
                      </a>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-10 my-3">
                    <h3 className="product-heading">Livrare</h3>
                    <p className="product-data">
                      Livrare <b>gratuita</b> valabila la toate produsele!
                      Livram un toata Romania in <b>5 zile lucratoare</b>
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-10 my-3">
                    <h3 className="product-heading">Link-ul produsului</h3>
                    <a
                      href="javascript.void(0);"
                      onClick={() => {
                        copyToClipboard(
                          "https://s.yimg.com/uu/api/res/1.2/2jmYiditumSjipyClueILw--~B/aD0xMzMzO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-09/858128d0-3491-11ed-aeec-c03b39ac030c.cf.webp"
                        );
                      }}
                    >Copiaza URL</a>
                  </div>
                </div>
              </div>
            </div>
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
              <h3 id="review">Recenzii</h3>
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
                        href="#comment"
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
