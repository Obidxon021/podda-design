import React from 'react'
import './Sidebar.css'
import { SIDEBAR_DATA } from '../../static/SIDEBAR_DATA'
import { NavLink } from 'react-router'
import { RiLogoutBoxRFill } from "react-icons/ri";
import { useLocation } from 'react-router-dom'

function Sidebar() {

  const getNavLinkClass = ({ isActive }) => {
    return isActive ? 'sidebar_link active_link' : 'sidebar_link';
  };

  const location = useLocation()

  if(location.pathname === '/login') {
    return null
  }

  return (
    <div className='sidebar_wrapper'>
      <article className='logo_container' >
        <h3>LOGO</h3>
      </article>
      <article className='sidebar_items'>
        {
          SIDEBAR_DATA.map(i => <section key={i.id}>
            <NavLink className={getNavLinkClass} to={i.route}>{i.icon}</NavLink>
            {i.id === 7 && <div className="divider"></div>}
          </section>)
        }
        <div className='logout_wrapper'><RiLogoutBoxRFill /></div>
      </article>
    </div>
  )
}

export default Sidebar