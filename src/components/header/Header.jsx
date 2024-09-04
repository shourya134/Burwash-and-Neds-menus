import React from 'react'
import './header.css'
import logo from './logo.svg';
import hands from './hands.png'
import ec from './eclogo.svg'
import vic from './viclogo.svg'

const {useState} = React;

function Header() {

  const [isActive, setActive] = useState(true);

  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    
    
    <div style={{height:'11rem'}}>
      <header>
        <nav class="topbar" aria-label="Global Navigation">
          <ul className='subsite-menu'>
            <div className='menu-link'>
            <a href="https://www.vicu.utoronto.ca/about-victoria/edia/" ><img className='icon' src={hands}  alt="Equity, Diversity, Inclusion and Accessibility (EDIA) Icon"/> </a>
            </div>
              <a className='subsite-menu-class' href="https://www.vicu.utoronto.ca/about-victoria/edia/">EDIA</a>
            <div className='menu-link' >
              <a href="https://emmanuel.utoronto.ca"> <img className='icon-2' src={ec}  alt="Emmanuel College Logo"/> </a>
            </div>
              <a className='subsite-menu-class' href="https://emmanuel.utoronto.ca">Emmanuel  College</a>
            <div className='menu-link'>
              <a href="https://vic.utoronto.ca"> <img className='icon-2' src={vic}   alt="Emmanuel College Logo"/></a>
            </div>
              <a className='subsite-menu-class' href="https://vic.utoronto.ca">Victoria  College</a>
          </ul>

        <div style={{display:'flex',width:'100%',justifyContent:'right',marginRight:'10%'}}><a className='donate' href="https://www.vicu.utoronto.ca/donate/">DONATE</a>
        
          <div > 
            <button className="quick-link" onClick={toggleClass} > 
                Quick Links 
            </button> 
            <ul style={{marginTop:'0'}}>  
                <a href="https://www.acorn.utoronto.ca/" className={isActive ? 'off': 'on'}> 
                ACORN
                {isActive}</a> 
                <a href="http://q.utoronto.ca/" className={isActive ? 'off': 'on'}> 
                QUERCUS</a> 
                <a href="https://www.utoronto.ca/" className={isActive ? 'off': 'on'}> 
                U of T</a> 
                <a href="https://vicdir.vicu.utoronto.ca/search" className={isActive ? 'off': 'on'}> 
                A-Z Directory</a> 
                <a href="http://eepurl.com/gYEUKr" className={isActive ? 'off': 'on'}> 
                E-mail Sign-Up</a> 
            </ul> 
      

        
        </div>
        </div>
        
        </nav>
        <div></div>
        
      </header>
      
      
      <a href="https://vicu.utoronto.ca/" className="viclogoheader w-inline-block"><img src={logo} alt="victoria university crest and logomark" loading="lazy" sizes="(max-width: 479px) 156px, 380px"  /></a>
    
    
    </div>

    
  );
};

export {Header};
