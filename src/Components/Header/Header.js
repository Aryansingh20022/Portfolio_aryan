import React from 'react'
import './header.css';
import ME from '../../asset/Me.jpeg';
const Header = () => {
  return (
    <section id="home">
      <div className='container header-container'>
        <h5>Hello I am</h5>
        <h2>ARYAN SINGH</h2>
        <h5 className='text-light'>Frontend Developer & Competitive Coder</h5>
        <div className='but'>
        <a href="#CV" className='btn x'>Resume</a>
        <a href="#contact" className='btn btn-primary'>Lets Talk</a>
        </div>
        <div className='me'>
          <img src={ME} alt="No img" />
        </div>
      </div>
    </section>
  )
}

export default Header
