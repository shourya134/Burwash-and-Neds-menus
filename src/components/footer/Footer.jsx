import React from 'react'
import './footer.css'
import { FaInstagram,FaSquareXTwitter,FaFacebook,FaLinkedin } from "react-icons/fa6";
function Footer() {
  
  return (
    <footer>
      <div class='for-footer'> 
        <div>
          <ul className='footer-text'>
              <h2 className='footer-heading'>Contact Us:</h2>
              <li className='content-footer'>Victoria University</li>
              <li className='content-footer-2'>73 Queen's Park Crescent</li>
              <li className='content-footer-2'>Toronto, ON</li>
              <li className='content-footer-2'>M5S 1K7</li>

          </ul>
        </div>
        
        <div className='for-mail'><a href="https://www.vicu.utoronto.ca/subscribe-to-our-mailing-list/" className='subscribe'>Subscribe to our mailing list </a></div>
        <div className='socials'>
          <a className='icons' href="https://www.linkedin.com/school/university-of-toronto---victoria-university/" aria-label="LinkedIn"><FaLinkedin size={'25px'} /></a>
          <a className='icons' href="https://twitter.com/VicCollege_UofT" aria-label="Twitter"><FaSquareXTwitter size={'25px'}/></a>
          <a className='icons' href="https://www.facebook.com/vicu.utoronto/" aria-label="Facebook"><FaFacebook size={'25px'}/></a>
          <a className='icons' href="https://www.instagram.com/viccollege/?hl=en" aria-label="Instagram"><FaInstagram size={'25px'}/></a>
        </div>
      
        
    </div>

      
    <div className='copyright'>© 2023 Victoria University. All rights reserved.</div>
    </footer>
    
  );
};

export {Footer};