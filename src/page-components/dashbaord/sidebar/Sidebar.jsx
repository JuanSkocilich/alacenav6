import React from 'react'
import './Sidebar.css'

export const Sidebar = ({ children, menu }) => {
  
  return (
    <div className={!menu ? 'move-sidebar' : 'sidebar'}>
      {children}
    </div>
  )
}
