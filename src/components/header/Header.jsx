import React from 'react'
import './header.css'
import logo from './logo.svg';
import hands from './hands.png'
import ec from './eclogo.svg'
import vic from './viclogo.svg'
function Header() {
  return (
    
    <div>
      <header>
        <nav class="topbar" aria-label="Global Navigation">
          <ul className='subsite-menu'>
            <div>
            <a href="https://www.vicu.utoronto.ca/about-victoria/edia/" ><img className='icon' src={hands} height="45.95" width="50.85" alt="Equity, Diversity, Inclusion and Accessibility (EDIA) Icon"/> </a>
            </div>
            <a className=''>EDIA</a>
            <div >
              <a href="https://emmanuel.utoronto.ca"className='menu-link'> <img className='icon' src={ec} height="50.95" width="60.85" alt="Emmanuel College Logo"/> </a>
            </div>
            <a className=''>EmmanuelCollege</a>
            <div >
              <a href="https://vic.utoronto.ca"className='menu-link'> <img className='icon-2' src={vic} height="40.95" width="45.85" alt="Emmanuel College Logo"/></a>
            </div>
            <a className=''>VictoriaCollege</a>
          </ul>


        </nav>
      </header>
      
      <a href="https://vicu.utoronto.ca/" class="viclogoheader w-inline-block"><img src={logo} alt="victoria university crest and logomark" loading="lazy" sizes="(max-width: 479px) 156px, 380px" className='image-2' /></a>
    </div>

    
  );
};

export {Header};
