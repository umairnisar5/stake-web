import React from 'react'
import logo from "./zyflogonew.png";
import image from "./pic1.png"
import "./LandingPage.css"
function Header() {
    return (
        <div>
        <div className="container">
            <div className="logo-div">
  <span className="logo-img">
<img src={logo} alt="logo" width="60px" />
  </span>
  <span className="logo-txt">
zYF Protocol
  </span>
            </div>
            <div>
                 <span className="text_blog">
                   Blog
                 </span>
                 <span>
                   Launch App 
                 </span>
            </div>
        </div>
        <div className="decentr_lized">
        <h1>Decentralized<br/> Seigniorage Insurance<br/> Protocol</h1>
        <img src={image} alt="pic" width="100px" />

        </div>
        



</div>
        
       
        
        
       

    )
}

export default Header;