import React from "react";
import logo from "./zyflogonew.png";
import image from "./pic1.png";
import pic from "./Untitled.png";
import NearMeIcon from "@material-ui/icons/NearMe";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import TwitterIcon from "@material-ui/icons/Twitter";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import { NavLink } from "react-router-dom";
import "./LandingPage.css";

function Header() {
  return (
    <>
   
      <div className="main_div">
        <div className="navbar">
          <div className="img_heading">
            <img src={logo} height="40" width="40" />
            <h2>zYF Protocol</h2>
          </div>
          <div className="nav_links">
            <p className="blog_text">Blog</p>
            <p className="launch_app">LaunchApp</p>
            <ArrowRightAltIcon className="arrow_icon" />
          </div>
        </div>

        <div className="aboutpage_div">
        <div className="aboutpage_detail">
          <h1>Decentralized <br /> Seigniorage Insurance <br /> Protocol</h1>
          <p>
             Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do
             eiusmod tempor
             incididunt ut labore et dolore manage alique. Ut enim ad minim
             veniam,quis nostrud
             exercitation ullamco laboris nisi ut aliquip ex ea commodo
             consequat.
           </p>

           <div className="aboutpage_buttons">

           <NavLink exact to="/App">

           <button className="launch_text">Launch App</button>
           </NavLink>

           <button className="lite_paper">Litepaper</button>
           </div>

           <p>join our community!</p>
           <div className="aboutpage_logo">
               <ModeCommentIcon className="logo1" />
               <NearMeIcon className="logo1" />
             </div>

           </div>

           <div className="aboutpage_img">
             <img src={image} width="200px" />
           </div>
           
        </div>

        <div className="detailpage_div">
          <div className="protocol">
            <h2>What is zYF Protocol?</h2>
            <h3>Insurance on coupons</h3>
                 <p>
                   Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do
                   eiusmod tempor
                   incididunt ut labore et dolore manage alique. Ut enim ad minim
                   veniam,quis nostrud
                   exercitation ullamco laboris nisi ut aliquip ex ea commodo
                   consequat.
                 </p>
          </div>
          <div className="detail_img">
            <div className="insurance_p">
            <h3>Insurance on un-pegging</h3>
               <p>
                  Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do
                  eiusmod tempor
                  incididunt ut labore et dolore manage alique. Ut enim ad minim
                  veniam,quis nostrud exercitation
                </p>
                <button className="read_blog">Read our blog</button>
            </div>
            <div className="detailpage_img">
              <img src={pic} width="250px" />
            </div>
          </div>
        </div>

        <div className="footer_div">
          <p>zYF Protocol © 2021</p>
          <p>App Lite paper Blog</p>
          <p>
           <TwitterIcon className="logo2" />
           <ModeCommentIcon className="logo2" />
           <NearMeIcon className="logo2" />
          </p>
        </div>

      </div>
    </>
  );
}

export default Header;
