import React from 'react'
import {BsFillBellFill,BsFillEnvelopeFill,BsPersonCircle,BsSearch,BsJustify, BsEnvelopeFill} from 'react-icons/bs'
const Header = ({opensidebar}) => {
  return (
    <div className="header">
        <div className="menu-icons">
            <BsJustify className='icon' onClick={opensidebar}/>
        </div>

        <div className="header-left">
            <BsSearch className='icon'/>
        </div>

        <div className="header-right">
            <BsFillBellFill className='icon'/>
            <BsEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/>
        </div>
        
    </div>
  )
}

export default Header