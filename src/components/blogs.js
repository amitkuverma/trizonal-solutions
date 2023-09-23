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

        <div className="container py-4 py-md-5">
          <div className="row">
            <div className="col-12 col-md-8">
              <article id="post-2455" className="post post-2455 type-post status-publish format-standard hentry category-healthcare">
                <div className="post_headings">
                  <h2 className="post_title"><a className="text-dark text-decoration-none fnt-fly fnt-24 fnt-md-32 fw-900 text-uppercase" href="#">Healthcare Trends in 2023 and Beyond</a></h2>          </div>
                <div className="post_figure_and_info">
                  <div className="post_sub"><span className="post_info post_date"><i className="fa fa-calendar"></i> August 14, 2023</span><a href="#" title="deecantrell"><span className="post_info post_author">deecantrell</span></a><a href="#" title="View all posts in category: Healthcare"><span className="post_info post_categories">Healthcare</span></a></div>              </div>
                <p>Several factors are impacting what we see happening in 2023 relate to healthcare trends. Just to name a few – the aftermath of the pandemic, the current financial downturn, labor shortages and the increasing adoption of technology/digitization. We see Artificial intelligence (AI) and more specifically, machine learning (ML) tools, dramatically increasing, that market is forecast […]</p>
                <p>
                  <a href="#" className="btn btn-primary update-btn text-uppercase py-2">Read More</a>
                </p>
              </article>

            </div>
            <div className="col-12 col-md-4">
              <aside id="recent-posts-2" className="left-side">
                <h4 className="fnt-20 fnt-md-24 fw-900 fnt-fly text-uppercase">Recent Posts</h4>
                <ul className="ps-0">
                  <li>
                    <a className="text-uppercase fnt-fly text-dark fw-600 fnt-16" href="#">Healthcare Trends in 2023 and Beyond</a>
                  </li>
                  <li>
                    <a className="text-uppercase fnt-fly text-dark fw-600 fnt-16" href="#">NIST and Remote Patient Monitoring</a>
                  </li>
                  <li>
                    <a className="text-uppercase fnt-fly text-dark fw-600 fnt-16" href="#">Social Determinants of Health</a>
                  </li>
                  <li>
                    <a className="text-uppercase fnt-fly text-dark fw-600 fnt-16" href="#">A Patient Experience with Telemedicine</a>
                  </li>
                  <li>
                    <a className="text-uppercase fnt-fly text-dark fw-600 fnt-16" href="#">CMS Announces Relief on QPP in Response to Covid-19</a>
                  </li>
                </ul>

              </aside>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}
