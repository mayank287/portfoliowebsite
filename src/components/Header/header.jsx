import React from 'react';
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from './HeaderSocials';

//  Images Import Here

const header = () => {
  return (
   
    <header>

        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Name</h1>
            <h5 className="text-light">
                Fullstack Developer
                
            </h5>
            <CTA />
            <HeaderSocials />

            <div className="me">
                <img src='' alt='' />
            </div>
            <a href="#contact" className='scroll_down'>
                Scroll Down

            </a>



        </div>

    </header>
  )
}

export default header