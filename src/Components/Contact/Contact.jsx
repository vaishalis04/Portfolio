import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
  const form = useRef();
  const [done,setDone]=useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_j2bpc1g', 'template_v2q3lpw', form.current, {
        publicKey: 'Z5QMW9wrEo9rBLKoY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setDone(true)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span>Get in touch</span>
          <span>Contact me</span>
          <div className='blur s-blur1' style={{background:"ABF1FF94"}}></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='user_name' className='user' placeholder='Name' />
          <input type="email" name='user_email' className='user' placeholder='Email' />
          <textarea name='message' className='user' placeholder='Message' />
          <input type="submit" value="send" className='button' />
          <span>{done && "Thanks for contacting me"}</span>
          <div className='blur c-blur' style={{background: "var(--purple)"}}></div>

        </form>
      </div>
    </div>
  )
}

export default Contact