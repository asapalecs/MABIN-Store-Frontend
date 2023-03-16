import React from 'react'
import BlogCard from '../components/BlogCard';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta"

const Blog = () => {
  return (
    <>
    <Meta title={"Blog"} />
    <BreadCrumb title="Blog" />
    <div className='blog-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-3'>
                <div className="filter-card mb-3">
                <h3 className="filter-title">Gaseste dupa Categorie</h3>
                <div>
                  <ul className="ps-0">
                    <li>Tech</li>
                    <li>Noutati</li>
                    <li>Jocuri Video</li>
                    <li>COVID-19</li>
                  </ul>
                </div>
              </div>
                </div>
                <div className='col-9'>
                    <div className='row'>
                        <div className='col-6 mb-3'>
                        <BlogCard />
                        </div>
                        <div className='col-6 mb-3'>
                        <BlogCard />
                        </div>
                        <div className='col-6 mb-3'>
                        <BlogCard />
                        </div>
                        <div className='col-6 mb-3'>
                        <BlogCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
)
}

export default Blog