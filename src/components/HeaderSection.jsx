import React from 'react';
import Button from './Button';
import './HeaderSection.scss'

function HeaderSection() {
  return (
    <div className="header-section">
      <h1 className='title'>A modern publishing platform</h1>
      <p className="description">Grow your audience and build your online brand</p>
      <div className="btn-section">
      <Button text='Start for Free' cssClass='solid' />
      <Button text='Learn More' cssClass='light' />
      </div>
    </div>
  )
}

export default HeaderSection