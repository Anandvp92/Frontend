import background1 from '../assets/images/pexels-luis-la-14499106.jpg'
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
          <img src={gitLogo} alt="icons" className='icons'/>
          <img src={fbLogo} alt="icons" className='icons'/>
          <img src={XLogo} alt="icons" className='icons'/>
          <img src={WhatsappLogo} alt="icons" className='icons' />
  
          {/* Add more social media icons as needed */}
        </div>
   

{/* Start Home Seciton */}
<section id="section-1">
        <div className="section-div" style={{backgroundImage:`url(${background3})`}}>
        <div className='section-div-blur'></div>

        <div className="content-div">
        <div className='container'>
        <p className='containerpara'><span className='styleletter'>Quick Summary</span> :- Flexibility, scalability, and easy customizations are the essential requirements every organization is looking for in their applications. Nothing better can meet these demands other than a SaaS architecture. Get to know about its architecture types, models, and benefits you can reap for a successful growth in the market.</p>
        </div>
    
        <div className='container'>
            <img style={{width:"100%"}} src='https://plus.unsplash.com/premium_photo-1673306778968-5aab577a7365?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
        <p className='containerpara'><span className='styleletter'>Quick Summary</span> :- Flexibility, scalability, and easy customizations are the essential requirements every organization is looking for in their applications. Nothing better can meet these demands other than a SaaS architecture. Get to know about its architecture types, models, and benefits you can reap for a successful growth in the market.</p>
        </div>
    

        <div className='container'>
            <img style={{width:"100%"}} src='https://plus.unsplash.com/premium_photo-1673306778968-5aab577a7365?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
        <p className='containerpara'><span className='styleletter'>Quick Summary</span> :- Flexibility, scalability, and easy customizations are the essential requirements every organization is looking for in their applications. Nothing better can meet these demands other than a SaaS architecture. Get to know about its architecture types, models, and benefits you can reap for a successful growth in the market.</p>
        </div>
    

        <div className='container'>
            <img style={{width:"100%"}} src='https://plus.unsplash.com/premium_photo-1673306778968-5aab577a7365?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
        <p className='containerpara'><span className='styleletter'>Quick Summary</span> :- Flexibility, scalability, and easy customizations are the essential requirements every organization is looking for in their applications. Nothing better can meet these demands other than a SaaS architecture. Get to know about its architecture types, models, and benefits you can reap for a successful growth in the market.</p>
        </div>
    
        </div> 
      
        </div>
        </section>
        {/* End Home Section */}



         {/* Start Home Seciton */}
         <section id="section-2">
        <div className="section-div" style={{backgroundImage:`url(${background1})`}}>
        <div className='section-div-blur'></div>
        <div className="content-div">

        <h1>Product</h1>
        </div> 
            
        </div>
        </section>
        {/* End Home Section */}



         {/* Start Home Seciton */}
         <section id="section-3">
        <div className="section-div" style={{backgroundImage:`url(${background3})`}}>
        <div className='section-div-blur'></div>
        <div className="content-div">

        <h1>Blog</h1>
        </div> 
        </div>
        </section>
        {/* End Home Section */}




         {/* Start Home Seciton */}
         <section id="section-4">
        <div className="section-div" style={{backgroundImage:`url(${background2})`}}>
        <div className='section-div-blur'></div>
        <div className="content-div">

        <h1>About</h1>
        </div> 
        </div>
        </section>
        {/* End Home Section */}




         {/* Start Home Seciton */}
         <section id="section-5">
        <div className="section-div" style={{backgroundImage:`url(${background2})`}}>
        <div className='section-div-blur'></div>
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