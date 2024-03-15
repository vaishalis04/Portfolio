import React from 'react'
import './Intro.css'
import Github from '../../assets/github.png'
import LinkedIn from '../../assets/linkedin.png'
import Instagram from '../../assets/instagram.png'
import Vector1 from '../../assets/Vector1.png'
import Vector2 from '../../assets/Vector2.png'
import boy from '../../assets/boy.png'
// import thumbup from '../../assets/thumbup.png'
import Crown from '../../assets/crown.png'
import glassesemoji from '../../assets/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import glass from '../../assets/glasses.png'


const Intro = () => {
  return (
 <div className="intro">
    <div className="i-left">
        <div className="i-name">
            <span>Hy! I Am </span>
            <span>Vaishali Singh</span>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis delectus minus sint repellat labore ut qui hic earum aperiam, nisi dolores voluptate. Accusamus unde voluptates, doloribus harum incidunt tenetur blanditiis?</span>
        </div>
        <button className='button i-button'>Hire me</button>
        <div className="i-icons">
          <a href=""><img src={Github} alt="" /></a>
          
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />

        </div>
    </div>
    <div className="i-right">
      <img src={Vector1} alt="" />
      <img src={Vector2} alt="" />
      <img src={boy} alt="" />
      <img src={glassesemoji} alt="" />

<div style={{top:'-2%',left:'62%'}}>
  <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
</div>
<div style={{top:'18rem',left:'0rem', width: '50%'}}>
  <FloatingDiv image={glass} txt1='Best Design' txt2='Award'/>
</div>
<div className="blur" style={{background:"rgb(238 210 255)"}}></div>
    </div>
<div className="blur" style={{background: '#C1F5FF' , top:'27rem',width:'21rem',height:'11rem',left:'25rem'}}></div>
 </div>
  )
}

export default Intro