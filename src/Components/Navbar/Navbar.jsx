import {useEffect, useState} from 'react'
import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import { Link, ScrollLink } from 'react-scroll'




const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  
    useEffect(() =>{
       window.addEventListener('scroll', ()=>{
        window.scrollY>500? setSticky(true): setSticky(false);
       })
    }, [])

  const[Toggle, setToggle] = useState(false)

  const toggleMenu = () => {
    setToggle(!Toggle)
  }

  return (
    <nav className ={`container  ${sticky? 'dark-nav' : ' '}`}>
      <img src={logo} alt="logo" className ="logo"/>
      <ul  className={`${Toggle?'hide-mobile-menu':''}`}>
      <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
      <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
      <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
      <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
      <li><Link to='testimonials' smooth={true} offset={-250} duration={500}>Testimonials</Link></li>
      <li><Link to='contact' smooth={true} offset={-260} duration={500} className ="btn">Contact us</Link></li>
      </ul>
      <img src="/Icons/menu-1.svg" alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar