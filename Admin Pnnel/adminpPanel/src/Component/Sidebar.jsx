import React from 'react'
import { BsCart3,BsGrid1X2Fill,BsFillArchiveFill,BsFillGrid3X3GapFill,BsPeopleFill,BsListCheck,BsMenuButtonWideFill,BsFillGearFill } from 'react-icons/bs'
const Sidebar = ({opensidebarToggle,opensidebar}) => {
  return (
    <aside id='sidebar'  className={opensidebarToggle ? "sidebar-responsive" : ""}>
        <div className="sidebar-title">
            <div className="sidebar-brand">
                <BsCart3 className='icon-header'/>SHOP
            </div>
        <span className='icon close-icon' onClick={opensidebar}>X</span>
        </div>
        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href=" ">
                    <BsGrid1X2Fill className='icon'/>DASHBOARD
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href=" ">
                    <BsFillArchiveFill className='icon'/>PRODUCT
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href=" ">
                    <BsFillGrid3X3GapFill className='icon'/>CATEGORIES
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href=" ">
                    <BsPeopleFill className='icon'/>CUSTOMER
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href=" ">
                    <BsListCheck className='icon'/>INVENTORY
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href=" ">
                    <BsMenuButtonWideFill className='icon'/>REPORTS
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href=" ">
                    <BsFillGearFill className='icon'/>SETTING
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar