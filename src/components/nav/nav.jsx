import React from 'react';
import "./nav.css"
import { useState } from 'react';


const nav = () => {
    const [actveNav,setActiveNav]  =  useState("#")

   return (
   <nav>
       <a href='#'  onClick={() => setActiveNav("#")} className = {actveNav === "#" ? "active" : ""}>{/* Home icon comes here */}</a>
       <a href='#about'onClick={() => setActiveNav("#about")} className = {actveNav === "#about" ? "active" : ""}>{/* Home icon comes here */}</a>
       <a href='#experience' onClick={() => setActiveNav("#experience")} className = {actveNav === "#experience" ? "active" : ""}>{/* Home icon comes here */}</a>
       <a href='#services'onClick={() => setActiveNav("#services")} className = {actveNav === "#services" ? "active" : ""}>{/* Home icon comes here */}</a>
       <a href='#contact'onClick={() => setActiveNav("#contact")} className = {actveNav === "#contact" ? "active" : ""}>{/* Home icon comes here */}</a>

   </nav>
  )
}

export default nav