import React from 'react'
import './Works.css'
import Upwork from "../../assets/Upwork.png"
import Fiverr from "../../assets/fiverr.png"
import Amazon from "../../assets/amazon.png"
import Shopify from "../../assets/Shopify.png"
import Facebook from "../../assets/Facebook.png"


const Works = () => {
  return (
    <div className="works">
        <div className="awesome">
    <span>Works for All these</span>
    <span>Brands & Clients</span>
    <span>Lorem ipsum dolor sit amet Dolor, aut, facere, impedit sed odio dignissimos<br/>
     ut et qui. Iusto eveniet vero <br/>
     quidem maiores error. Nulla, optio provident.
     <br />Lorem ipsum dolor sit amet Dolor, aut, facere, impedit sed odio dignissimo</span>
   
    <button className='button s-button'>Hire Me</button>

    
<div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
  </div>
  <div className="m-right">
    <div className="m-mainCircle">
        <div className="m-secCircle">
            <img src={Upwork} alt="" />
        </div>
        <div className="m-secCircle">
            <img src={Fiverr} alt="" />
        </div>
        <div className="m-secCircle">
            <img src={Amazon} alt="" />
        </div><div className="m-secCircle">
            <img src={Shopify} alt="" />
            </div>
            <div className="m-secCircle">
            <img src={Facebook} alt="" />
        </div>
        
    </div>
<div className="m-backCircle blueCircle"></div>
<div className="m-backCircle yellowCircle"></div>

  </div>
  </div>
  )
}

export default Works