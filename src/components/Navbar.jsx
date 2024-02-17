import Favicon from "react-favicon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import titleicon from '../assets/home.svg';
import { useState, useEffect } from "react";

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
        <a href="/home"><img src="https://static.vecteezy.com/system/resources/thumbnails/024/684/356/small/illustration-of-eagle-head-logo-with-ai-generative-free-png.png" className="logo"/></a>
        </div>
        <div className="hambergermenu" >
        <FontAwesomeIcon onClick={clickfunc}  icon={ currentState? faBars : faTimes}></FontAwesomeIcon>
        </div>      
        <div className="navlinks" style={{display:currentState? "none":"block"}}><a className="links" href="/home">Home</a></div>
        <div className="navlinks" style={{display:currentState? "none":"block"}}><a className="links" href="/product">product</a></div>
        <div className="navlinks" style={{display:currentState? "none":"block"}}><a className="links" href="/blog">blog</a></div>
        <div className="navlinks" style={{display:currentState? "none":"block"}}><a className="links" href="/about">about</a></div>
        <div className="navlinks" style={{display:currentState? "none":"block"}}><a href="/contact"><button className="contact-btn">Contact Us</button></a></div> 
        </div>
        </>
    )
}