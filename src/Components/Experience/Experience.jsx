import React from 'react'
import './Experience.css'

const Experience = () => {
  return (
   <div className="experience">
    <div className="achievement">
        <div className="circle">8+</div>
        <span>Years</span>
        <span>Experience</span>
    </div>
    <div className="achievement">
        <div className="circle">20+</div>
        <span>completed</span>
        <span>Projects</span>
    </div>
    <div className="achievement">
        <div className="circle">5+</div>
        {/* <span>completed</span> */}
        <span>companies</span>
        <span>word</span>
    </div>
   </div>
  )
}

export default Experience