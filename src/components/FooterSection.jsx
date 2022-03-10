import React from 'react';
import FooterList from './FooterList';

function FooterSection(props) {
    const componentFooterList = props.content.list.map(data => <FooterList key={data.id} content={data} />)
    return (
        <div className="footer-section">
            <div className="footer-section-title">{props.content.title}</div>
            <div className="footer-section-list">{componentFooterList}</div>
        </div>
    )
}

export default FooterSection