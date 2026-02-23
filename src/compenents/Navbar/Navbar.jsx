import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./nav.module.css"

export default function Navbar() {
  return <>
      <nav className={`${styles.nav} navbar navbar-expand-sm justify-content-between px-5 py-2 sticky-top w-100`}>
      <div className="container">
        <NavLink className="navbar-brand fw-bold text-white" to="/">START FRAMEWORK</NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className={`${styles.NavLink} nav-link`} to="/about">ABOUT</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`${styles.NavLink} nav-link`} to="/portfolio">PORTFOLIO</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`${styles.NavLink} nav-link`} to="/contact">CONTACT</NavLink>
            </li>
          </ul>
        </div>
    </nav>
  
  </>
}
