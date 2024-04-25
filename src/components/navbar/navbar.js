import React, { useState } from 'react';
import './navbar.css'
import logo from "../../assets/logo.jpeg"
import { Link } from 'react-scroll';
import contactimg from "../../assets/contact3.webp"
import menu from "../../assets/menu2.png"

const Navbar = () => {
  const [showmenu, setshowmenu] = useState (false);
    return (
      <nav className="navbar">
        <img src={logo} alt='logo' className='logo'></img>
        <div className='desktopmenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500}  className='desktopmenulistitem'onClick={()=> setshowmenu(false)}> Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}  className='desktopmenulistitem'onClick={()=> setshowmenu(false)}>About</Link>
          <Link activeClass='active' to='work' spy={true} smooth={true} offset={-50} duration={500}  className='desktopmenulistitem'onClick={()=> setshowmenu(false)}>My Team</Link>
        </div>
        <button className='desktopMenubtn' activeClass="active" onClick={ ()=> {
          document.getElementById('contact').scrollIntoView({behavior:"smooth"});}}> <img src={contactimg} alt='contact' className='desktopmenuimg'/>Contact Us </button>
       <img src={menu} alt='Menu' className='Mobmenu' onClick={()=>setshowmenu(!showmenu)}/>
        <div className='navmenu' style={{display: showmenu? 'flex':'none'} }>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500}  className='listitem'>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}  className='listitem'>About</Link>
          <Link activeClass='active' to='work' spy={true} smooth={true} offset={-50} duration={500}  className='listitem'>My Team</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500}  className='listitem' >Contact</Link>
     </div>
      </nav>
    )
}
export default Navbar;