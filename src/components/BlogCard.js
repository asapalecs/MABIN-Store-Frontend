import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
        <div className="blog-card">
          <div className="card-image">
            <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
          </div>
          <div className="blog-content">
            <p className="date">11 Martie 2023</p>
            <h5 className="title">Știri noi despre inteligența artificială</h5>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              totam alias praesentium, molestias
            </p>
            <Link to="/blog/:id" className="button">
              Vezi mai mult
            </Link>
          </div>
        </div>
);
};

export default BlogCard;

