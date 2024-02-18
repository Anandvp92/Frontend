import Favicon from "react-favicon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import titleicon from '../assets/home.svg';
import { useState, useEffect } from "react";
import {Link} from 'react-scroll';
import eagleLogo from '../assets/illustration-of-eagle-head-logo-with-ai-generative-free-png.webp'
export function Navbar(){
    
    const[currentState,changeState]=useState(false);
    const clickfunc =()=>{
        changeState(!currentState)
       }

    useEffect(() => {
        const handleResize = () => {
        const windowWidth = window.innerWidth;
        
        if (windowWidth <= 810) {
        let navlinks= document.getElementsByClassName("navlinks")
        for(let i=0;i<navlinks.length;i++){
        navlinks[i].classList.add('display-none')
        }
        changeState(true)
        }
        else{
        let navlinks= document.getElementsByClassName("navlinks")
        for(let i=0;i<navlinks.length;i++){
        navlinks[i].classList.remove("display-none")
        }
        changeState(false)
        }
        };
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
   
    return(
        <>
        <Favicon url={titleicon} />
        <div className="navbar">
        <div className="logoimage" >
        <Link to="section-1" smooth={true} duration={500}><img src={eagleLogo} className="logo"/></Link>
        </div>
        <div className="hambergermenu" >
        <FontAwesomeIcon onClick={clickfunc}  icon={ currentState? faBars : faTimes}></FontAwesomeIcon>
        </div>      
        <div className="navlinks" style={{display:currentState? "none":"block"}}><Link to="section-1" smooth={true} duration={500} className="links" >Home</Link></div>
        <div className="navlinks" style={{display:currentState? "none":"block"}}><Link to="section-2" smooth={true} duration={500} className="links" >Product</Link></div>
        <div className="navlinks" style={{display:currentState? "none":"block"}}><Link to="section-3" smooth={true} duration={500} className="links" >Blog</Link></div>
        <div className="navlinks" style={{display:currentState? "none":"block"}}><Link to="section-4" smooth={true} duration={500} className="links" >About</Link></div>
        <div className="navlinks" style={{display:currentState? "none":"block"}}><Link to="section-5" smooth={true} duration={500} className=""><button className="contact-btn">Contact Us</button></Link></div> 
        </div>
        </>
    )
}