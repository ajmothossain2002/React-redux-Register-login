import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./HomeStyle.css";
import { getHomeData, reset_redirectTo } from "../../redux/authSlice";
//import New from "../new";

//import axios from 'axios';
export default function Home() {
  const { des,redirectTo } = useSelector((s) => s.contents);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHomeData());
  }, []);
 
  useEffect(() => {
    dispatch(reset_redirectTo(null));
  }, [redirectTo]);
  return (
    <>
      
      <div className="container">
        <h3 className="text-capitalize">Check our blogs</h3>
        <div className="row">
          <div className="col-lg-4">
            <div className="blog-card">
              <div className="blog-image">
                <img className="img-fluid" src="images/blog-3.jpg" alt="" />
              </div>
              <div className="blog-details">
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum vel diam lorem. Quisque luctus consequat risus, et
                  finibus libero maximus in. Mauris rhoncus odio id dolor
                  rhoncus, at sagittis ligula iaculis. Sed faucibus dui
                  dignissim augue gravida pretium. Aliquam erat volutpat.
                  Aliquam mauris tortor, eleifend nec enim non, fringilla
                  facilisis lorem. Fusce sagittis odio arcu, et aliquet ante
                  porttitor in. Fusce ac tortor lorem. Cras sit amet facilisis
                  turpis, vel semper elit.
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-card">
              <div className="blog-image">
                <img className="img-fluid" src="images/blog-5.jpg" alt="" />
              </div>
              <div className="blog-details">
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum vel diam lorem. Quisque luctus consequat risus, et
                  finibus libero maximus in. Mauris rhoncus odio id dolor
                  rhoncus, at sagittis ligula iaculis. Sed faucibus dui
                  dignissim augue gravida pretium. Aliquam erat volutpat.
                  Aliquam mauris tortor, eleifend nec enim non, fringilla
                  facilisis lorem. Fusce sagittis odio arcu, et aliquet ante
                  porttitor in. Fusce ac tortor lorem. Cras sit amet facilisis
                  turpis, vel semper elit.
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-card">
              <div className="blog-image">
                <img className="img-fluid" src="images/blog-3.jpg" alt="" />
              </div>
              <div className="blog-details">
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum vel diam lorem. Quisque luctus consequat risus, et
                  finibus libero maximus in. Mauris rhoncus odio id dolor
                  rhoncus, at sagittis ligula iaculis. Sed faucibus dui
                  dignissim augue gravida pretium. Aliquam erat volutpat.
                  Aliquam mauris tortor, eleifend nec enim non, fringilla
                  facilisis lorem. Fusce sagittis odio arcu, et aliquet ante
                  porttitor in. Fusce ac tortor lorem. Cras sit amet facilisis
                  turpis, vel semper elit.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <button className="viewBtn">
            <Link to={`/seeDet/1`}>View More</Link>
          </button>
        </div>
      </div>
      
      
    </>
  );
}
