import React from 'react';
import './NavList.scss'

function NavList(props) {
  return (
    <div className="nav-list">{props.data}</div>
  )
}

export default NavList