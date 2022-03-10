import React from 'react';
import NavList from './NavList';
import './NavDropDown.scss';
import arrow from '../images/icon-arrow-light.svg';

function NavDropDown(props) {
    const compNavList = props.data.list.map((data) => <NavList key={data.id} data={data}/>) 
    
    return (
        <div className="nav-dropdown">
            <button className="nav-dropdown-head">
                <div className="nav-dropdown-head-text">{props.data.name}</div>
                <img src={arrow} alt="arrow" id={props.data.id}/>
            </button>
            <div className="nav-dropdown-body">
                {compNavList}
            </div>
        </div>
    )
}

export default NavDropDown