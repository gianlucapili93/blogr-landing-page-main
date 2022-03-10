import React, { useState } from 'react';
import NavListMobile from './NavListMobile';
import arrow from './../images/icon-arrow-dark.svg';
import './NavDropDownMobile.scss';

function NavDropDownMobile(props) {
    const [state, setState] = useState(false);
    const changeStatus = () => state? setState(false) : setState(true);
    let cssStatus = '';
    state ? cssStatus = 'active' : cssStatus = '';
    const compNavListMobile = props.data.list.map((data) => <NavListMobile data={data}/>);
    return (
        <div className="nav-dropdown-mobile">
            <button onClick={changeStatus} className="nav-dropdown-mobile-head">
                <div className={`nav-dropdown-head-mobile-text ${cssStatus}`}>{props.data.name}</div>
                <img className={cssStatus} src={arrow} alt="arrow"/>
            </button>
            {state? 
                <div className="nav-dropdown-mobile-body">
                    {compNavListMobile}
                </div>
                : null
            }
            
        </div>
    )
}

export default NavDropDownMobile