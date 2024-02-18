import background1 from '../assets/images/pexels-pixabay-531880.jpg'
import background2 from '../assets/images/pexels-lil-artsy-1213447.jpg'
import background3 from '../assets/images/pexels-veeterzy-39811.jpg'
import { Footer } from './Footer';
import gitLogo from '../assets/github-mark-white.svg';
import fbLogo from '../assets/reshot-icon-facebook-EAQUC4LBMV.svg';
import XLogo from '../assets/twitter.svg';
import WhatsappLogo from '../assets/whatsapp.svg';

const Home =()=>{

    return(
        <>

<div className="container">
   

    <div className="social-icons-container">
          {/* Add your social media icons here */}
          <img src={gitLogo} alt="icons" className='icons' />
          <img src={fbLogo} alt="icons" className='icons' />
          <img src={XLogo} alt="icons" className='icons' />
          <img src={WhatsappLogo} alt="icons" className='icons' />
  
          {/* Add more social media icons as needed */}
        </div>
   

{/* Start Home Seciton */}
<section id="section-1">
        <div className="section-div" style={{backgroundImage:`url(${background3})`}}>

        <div className="content-div">

        <h1>Home</h1>
       
        </div> 
      
        </div>
        </section>
        {/* End Home Section */}



         {/* Start Home Seciton */}
         <section id="section-2">
        <div className="section-div" style={{backgroundImage:`url(${background1})`}}>

        <div className="content-div">

        <h1>Product</h1>
        </div> 
            
        </div>
        </section>
        {/* End Home Section */}



         {/* Start Home Seciton */}
         <section id="section-3">
        <div className="section-div" style={{backgroundImage:`url(${background3})`}}>
        <div className="content-div">

        <h1>Blog</h1>
        </div> 
        </div>
        </section>
        {/* End Home Section */}




         {/* Start Home Seciton */}
         <section id="section-4">
        <div className="section-div" style={{backgroundImage:`url(${background2})`}}>
        <div className="content-div">

        <h1>About</h1>
        </div> 
        </div>
        </section>
        {/* End Home Section */}




         {/* Start Home Seciton */}
         <section id="section-5">
        <div className="section-div" style={{backgroundImage:`url(${background2})`}}>
        <div className="content-div">

        <h1>Contact</h1>
        </div> 
        </div>
        </section>
        {/* End Home Section */}


      

        <Footer/>
      
      
      

</div>
        
        </>
    )
};

export default Home;