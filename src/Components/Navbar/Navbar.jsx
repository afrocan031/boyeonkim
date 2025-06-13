import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef= useRef();
  const location = useLocation();
  const navigate = useNavigate();

  // 프로젝트 상세 경로 판별 (예: /project1, /project2, /project3)
  const isProjectPage = ['/project1', '/project2', '/project3'].includes(location.pathname);

  const openMenu = () => {
    menuRef.current.style.right="0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px"
  }

  if (isProjectPage) {
    return (
      <div className='navbar'>
        <svg class="w-16 h-16 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
             alt="Back"
             className="nav-back-arrow"
             style={{ cursor: 'pointer' }}
             onClick={() => navigate(-1)}>
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
        </svg>

      </div>
    );
  }

  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li>
          <AnchorLink className='anchor-link hover:text-emerald-200 transition-colors duration-300' href='#home'>
            <p onClick={()=>setMenu("home")}>Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link hover:text-emerald-200 transition-colors duration-300' offset={50} href='#about'>
            <p onClick={()=>setMenu("about")}>About Me</p>
          </AnchorLink>
         
        </li>
        <li>
          <AnchorLink className='anchor-link hover:text-emerald-200 transition-colors duration-300' offset={50} href='#work'>
            <p onClick={()=>setMenu("work")}>Portfolio</p>
          </AnchorLink>

        </li>
        <li>
          <AnchorLink className='anchor-link hover:text-emerald-200 transition-colors duration-300' offset={50} href='#contact'>
            <p onClick={()=>setMenu("contact")}>Contact</p>
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className='anchor-link hover:text-emerald-200 transition-colors duration-300' offset={50} href='#work'>
          <p onClick={()=>setMenu("work")}>View Project</p>
        </AnchorLink>
      </div>
    </div>
  )
}

export default Navbar