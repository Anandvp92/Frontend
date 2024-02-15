import Favicon from "react-favicon";
import titleicon from '../assets/home.svg'
export function Navbar(){
    return(
        <>
       <Favicon url={titleicon} />
        <div className="navbar">

<a href="/home"><img src="https://static.vecteezy.com/system/resources/thumbnails/024/684/356/small/illustration-of-eagle-head-logo-with-ai-generative-free-png.png" className="logo"/></a>
       

        <div className="navlinks"><a className="links" href="/home">Home</a></div>
        <div className="navlinks"><a className="links" href="/product">product</a></div>
        <div className="navlinks"><a className="links" href="/blog">blog</a></div>
        <div className="navlinks"><a className="links" href="/about">about</a></div>
        <div className="navlinks"><a className="links" href="/contact">Contact</a></div>
        </div>
        </>
    )
}