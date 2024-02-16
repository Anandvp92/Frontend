import Favicon from "react-favicon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import titleicon from '../assets/home.svg';
import { useState } from "react";
export function Navbar(){
   const[currentState,changeState]=useState(true);
   const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 700);

   const clickfunc =()=>{
    changeState(!currentState)
    setIsSmallScreen(!isSmallScreen)
    console.log(isSmallScreen)
   }

   window.addEventListener('resize',handleResize);
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
      
        <div className="navlinks "><a className="links" href="/home">Home</a></div>
        <div className="navlinks"><a className="links" href="/product">product</a></div>
        <div className="navlinks"><a className="links" href="/blog">blog</a></div>
        <div className="navlinks"><a className="links" href="/about">about</a></div>
        <div className="navlinks"><a className="links" href="/contact">Contact</a></div>
    

       
        </div>
        </>
    )
}