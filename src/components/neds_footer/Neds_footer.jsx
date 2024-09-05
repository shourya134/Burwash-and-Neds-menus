import './neds_footer.css'
import { FaInstagram,FaSquareXTwitter,FaFacebook,FaLinkedin } from "react-icons/fa6";
function Neds_footer() {
  
  return (
    <footer>
      <div class='for-footer-1'> 
        <div>
          <ul className='footer-text-1'>
              <h2 className='footer-heading-1'>Contact Us:</h2>
              <li className='content-footer-1'>Victoria University</li>
              <li className='content-footer-2-1'>73 Queen's Park Crescent</li>
              <li className='content-footer-2-1'>Toronto, ON</li>
              <li className='content-footer-2-1'>M5S 1K7</li>

          </ul>
        </div>
        
        <div className='for-mail-1'><a href="https://www.vicu.utoronto.ca/subscribe-to-our-mailing-list/" className='subscribe'>Subscribe to our mailing list </a></div>
        <div className='socials-1'>
          <a className='icons-1' href="https://www.linkedin.com/school/university-of-toronto---victoria-university/" aria-label="LinkedIn"><FaLinkedin size={'25px'} /></a>
          <a className='icons-1' href="https://twitter.com/VicCollege_UofT" aria-label="Twitter"><FaSquareXTwitter size={'25px'}/></a>
          <a className='icons-1' href="https://www.facebook.com/vicu.utoronto/" aria-label="Facebook"><FaFacebook size={'25px'}/></a>
          <a className='icons-1' href="https://www.instagram.com/viccollege/?hl=en" aria-label="Instagram"><FaInstagram size={'25px'}/></a>
        </div>
      
        
    </div>

      
    <div className='copyright-1'>© 2024 Victoria University. All rights reserved.</div>
    </footer>
    
  );
};

export {Neds_footer};