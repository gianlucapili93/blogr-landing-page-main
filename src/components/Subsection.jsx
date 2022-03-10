import React from 'react';
import './Subsection.scss';

function Subsection(props) {
  return (
    <div className="sub-section-content-text">
      <h3>{props.content.subtitle}</h3>
      <p className="content">{props.content.paragraph}</p>
    </div>
  )
}

export default Subsection