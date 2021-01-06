import React from 'react'
import logo from "./zyflogonew.png"
import "./LandingPage.css"
function Header() {
    return (
        <div className="container">
            <div className="logo-div">
  <span className="logo-img">
<img src={logo} alt="logo" width="60px" />
  </span>
  <span className="logo-txt">
zYF Protocol
  </span>
            </div>
            <div className="text_blog">
                 <span>
                   Blog
                 </span>
                 <span>
                   Launch App 
                 </span>
            </div>

            <div>
            
            </div>

        </div>
       

    )
}

export default Header;