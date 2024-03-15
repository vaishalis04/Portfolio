import React from 'react'
import './Service.css'
import HeartEmoji from '../../assets/heartemoji.png'
import Glasses from '../../assets/glasses.png'
import Humble from '../../assets/humble.png'
import Card from '../Card/Card'
import Resume from './Vaishali Resume.pdf'



const Service = () => {
  return (
    <div className="services">
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <span>Lorem ipsum dolor sit amet Dolor, aut, facere, impedit sed odio dignissimos ut et qui. Iusto eveniet vero <br/>quidem maiores error. Nulla, optio provident.</span>
        <a href={Resume} download>
        <button className='button s-button'>Download CV</button>

        </a>
<div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
      </div>
      <div className="cards">
<div style={{left: '18rem'}}>
  <Card
emoji={HeartEmoji}
heading={'Design'}
detail={"Figma,Sketch,Photoshop"}
  />
</div>
<div style={{top: '12rem',left:"-1rem"}}>
  <Card
emoji={Glasses}
heading={'Design'}
detail={"Figma,Sketch,Photoshop"}
  />
</div>

<div style={{top: '19rem',left:"16rem"}}>
  <Card
emoji={Humble}
heading={'Design'}
detail={"Figma,Sketch,Photoshop"}
  />
</div>
<div className="blur s-blur2" style={{background: 'var(--purple)'}}></div>
      </div>
    </div>
  )
}

export default Service