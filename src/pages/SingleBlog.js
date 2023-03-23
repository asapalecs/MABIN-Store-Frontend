import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import blog from "../images/blog-1.jpg";
import { AiOutlineArrowLeft } from "react-icons/ai";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Mabin | Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-12">
              <div className="row">
                <div className="single-blog-card">
                  <Link to="/blog" className="d-flex align-items-center gap-10">
                    <AiOutlineArrowLeft className="fs-4" />
                    Inapoi la Blog-uri
                  </Link>
                  <h3 className="title">
                    Știri noi despre inteligența artificială
                  </h3>
                  <img
                    src={blog}
                    alt="blog"
                    className="img-fluid w-100 my-4"
                  />
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga quod eum quia sed a harum voluptatum placeat maxime
                    numquam, reiciendis saepe. Ipsa, modi ratione totam quis
                    harum, deserunt excepturi placeat aperiam similique sit
                    quos? Eveniet qui, velit veniam quasi rem iusto ad totam
                    saepe reiciendis quia earum pariatur aut dignissimos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
