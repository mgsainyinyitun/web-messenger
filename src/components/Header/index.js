import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './style.css';

/**
* @author: Sai Nyi
* @function Header
**/

const Header = (props) => {
  return(
   <header className="header">
       <div style={{display:"flex"}}>
           <div className="logo">
               Web Messenger
           </div>
           <ul className="leftMenu">
               <li><NavLink to={'/login'}>Login</NavLink></li>
               <li><NavLink to={'/signup'}>Sign Up</NavLink></li>
           </ul>
       </div>
       <div style={{margin: '20px 0',color:"#fff",fontWeight:"bold"}}>Hi Riz</div>
       <ul className="menu">
           <li>
           <Link to={"#"} onClick={props.logout}>Logout</Link>
           </li>
       </ul>
   </header>
   )

 }

export default Header;