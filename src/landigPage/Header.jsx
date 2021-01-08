import React from "react";
import logo from "./zyflogonew.png";
import image from "./pic1.png";
import pic from "./Untitled.png";
import NearMeIcon from "@material-ui/icons/NearMe";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import TwitterIcon from "@material-ui/icons/Twitter";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import "./LandingPage.css";

function Header() {
  return (
    <div>
      <div className="container">
        <div className="logo-div">
          <span className="logo-img">
            <img src={logo} alt="logo" width="60px" />
          </span>
          <span className="logo-txt">zYF Protocol </span>
        </div>
        <div className="text_blog">
          <span className="blog_text">Blog </span>
          <span className="launch_app">LaunchApp </span>
          <ArrowRightAltIcon className="arrow_icon" />
        </div>
      </div>
      <div>
        <div className="decentr_lized">
          <div className="banertxt-div">
            <h1>
              Decentralized <br /> Seigniorage Insurance <br /> Protocol
            </h1>
            <p className="para_div">
              Protect your Seigniorage assets the risk of not returning to
              peg(with a specific time period or ever).Get paid providing
              liquidity to the zYF insurance fund.
            </p>
          </div>

          <img className="image" src={image} alt="pic" />
        </div>
        <div className="button_launch">
          <button className="launch_text"> Launch zzApp </button>
          <button className="lite_paper"> Litepaper </button>
        </div>
        <div className="join">
          <p>join our community!</p>
        </div>
      </div>
      <div>
        <ModeCommentIcon />
        <NearMeIcon />
      </div>
      <div main_div>
        <div className="protocol">
          <h2> What is zYF Protocol ? </h2> <h3> Insurance on coupons </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor <br />
            incididunt ut labore et dolore manage alique.Ut enim ad minim
            veniam, quis nostrud <br />
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        <div className="pegging">
          <h2> Insurance on un - pegging </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor <br />
            incididunt ut labore et dolore manage alique.Ut enim ad minim
            veniam, quis nostrud exercitation
          </p>
        </div>
        <img src={pic} alt="img" width="100px" />
        <button className="read_blog"> Read our blog </button>
      </div>
      <footer className="foot_div">
        <p> zYF Protocol© 2021 </p> <p> App Lite paper Blog </p> <TwitterIcon />
        <ModeCommentIcon />
        <NearMeIcon />
      </footer>
    </div>
  );
}

export default Header;
