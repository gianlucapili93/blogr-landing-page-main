import React from 'react';
import Subsection from './Subsection';
import './MainSection.scss';

function MainSection(props) {
  const componentSubsection1 = props.content.subsection.map(data => <Subsection key={data.id} content={data} cssClass = "right"/>);
  return (
    <div className="section" id={props.id}>
        {props.content.title ? <h2 className="title">{props.content.title}</h2> : ''}
        <div className="sub-section" id={props.content.image}>
          <div className="sub-section-content">
              {componentSubsection1}
          </div>
          <div className="sub-section-cover"></div>
        </div>
    </div>
  )
}

export default MainSection