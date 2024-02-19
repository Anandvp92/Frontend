import '../components/Footer.css';
import gitLogo from '../assets/github-mark-white.svg';
import fbLogo from '../assets/reshot-icon-facebook-EAQUC4LBMV.svg';
import XLogo from '../assets/twitter.svg';
import WhatsappLogo from '../assets/whatsapp.svg';
import eagleLogo from '../assets/illustration-of-eagle-head-logo-with-ai-generative-free-png.webp'
export function Footer(){
    return (
        <>
        <section className="contact-area" id="contact">
         
            <div className="hr" />
                  <h6>1120 Lorem ipsum dolor sit amet, KC 179050, Chandigarh.</h6>
                  <h6>
                    +01 2345 6789 12<span>|</span>+01 2345 6789 12
                  </h6>
                <div className="contact-social">
                    <ul>
                      <li>
                        <a href='https://www.google.com'>

                        <img src={gitLogo} alt='github'  className='socilmedialogos'></img>
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href='https://www.google.com'>

                        <img src={fbLogo} alt='github'  className='facebooklogo'></img>
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href='https://www.google.com'>

                        <img src={XLogo} alt='github'  className='facebooklogo'></img>
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href='https://www.google.com'>

                        <img src={WhatsappLogo} alt='github'  className='socilmedialogos'></img>
                        </a>
                      </li>
                    </ul>
            </div>
    
                
        </section>
       
        <footer>
        <p style={{textDecoration:"underline"}} >
            Copyright © 2024{" "}
            All Rights<span className='footer-img'><img className='footerimage' src={eagleLogo}></img></span>
            Reserved.
          </p>
        </footer>
      </>
      
    )
}