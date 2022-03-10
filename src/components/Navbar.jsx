import React, { useState } from 'react';
import NavDropDown from './NavDropDown';
import NavMobile from './NavMobile';
import Button from './Button';
import logo from '../images/logo.svg';
import './Navbar.scss';
import data from '../data';

function Navbar() {
  const [status, setStatus] = useState(false);
  const compNavDropDown = data.navbar.map(data => <NavDropDown key={data.id} data={data} />);
  let cssStatus = '';
  status ? cssStatus = 'active' : cssStatus = '';
  
  return (
    <nav className='navbar'>
        <div className="nav-links">
            <div className="logo"><img src={logo} alt="logo"/></div>
            <div className="navigation">
              {compNavDropDown}
            </div>
        </div>
        <div className="access">
            <Button text='Login' />
            <Button text='Sign up' cssClass='solid' />
        </div>
        <button onClick={() => status? setStatus(false) : setStatus(true)} 
          className={`btn-mobile ${cssStatus}`} 
        />
        {status ? <NavMobile data={data.navbar} /> : null}
        
    </nav>
  )
}

export default Navbar