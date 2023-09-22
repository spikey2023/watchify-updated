import React from 'react'
import './ContentWrapper.css'

//higher order components to align contents to center
const ContentWrapper = ({ children }) => { 
  return (
    <div className='contentWrapper'>{children}</div>
  )
}

export default ContentWrapper