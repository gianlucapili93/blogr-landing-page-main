import React from 'react';
import FooterSection from './FooterSection';
import './Footer.scss'
import logo from '../images/logo.svg';
import data from '../data';

function Footer() {
    const footerSection = data.footer.map(data => <FooterSection key={data.id} content={data} />);
    return (
        <div className="footer">
            <div className="footer-top">
                <img src={logo} alt="logo" className='logo' />
                {footerSection}
            </div>
            <div className="footer-bottom">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="https://www.linkedin.com/in/gianluca-pili-8a49b916b/">Gianluca Pili</a> with React.
            </div>
        </div>
    )
}

export default Footer