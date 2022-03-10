import React from 'react';
import './LittleSection.scss';

function LittleSection(props) {
  return (
    <div className="little-section">
        <img src={props.srcImage} alt="illustration" className='little-section-illustration'/>
        <div className="little-section-content">
            <h2 className="little-section-content-title">{props.content.title}</h2>
            <div className="little-section-content-paragraph">{props.content.paragraph}</div>
        </div>
    </div>
  )
}

export default LittleSection