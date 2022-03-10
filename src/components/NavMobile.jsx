import React from 'react';
import Button from './Button';
import NavDropDownMobile from './NavDropDownMobile';

import './NavMobile.scss';

function NavMobile(props) {
  const compNavListMobile = props.data.map(data => <NavDropDownMobile key={data.id} data={data}/>);
  return (
    <div className="nav-mobile">
      {compNavListMobile}
      <hr />
      <Button text='Login' cssClass='dark'/>
      <Button text='Sign up' cssClass='colour'/>
    </div>
  )
}

export default NavMobile