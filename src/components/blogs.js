import * as React from "react";
import { Layout } from "../layout/layout";
import '../assets/styles/conponents/blogs.scss';
import { Link } from "react-router-dom";
import HeaderImage from '../assets/images/blogs-header.png'

export const Blogs = () => {
  return (
    <Layout active={"blogs"}>
      <div className="blogs">
        <div className="blogs-header">
          <img className="img-fluid" src={HeaderImage} alt="HeaderImage" />
          <div className="hdr-blog w-100">
            <div className="container">
              <h1 className="fnt-fly py-2 py-md-4 text-white fnt-24 fnt-md-36 fnt-md-40 fw-900 text-capitalize">THE BLOGS</h1>
            </div>
          </div>
        </div>
      </div>
      
    </Layout>
  )
}
