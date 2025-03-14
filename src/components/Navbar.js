import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext';
import { LocaleContext } from '../contexts/LocaleContext';
import Logo from './../assets/images/logo.jpeg';

export default function Navbar() {

  const [, setLocale] = useContext(LocaleContext);
  const [darkMode, setDarkMode] = useContext(ThemeContext);

  if (darkMode) {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  }
  else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }

  return (
    <nav className={`navbar fixed-top navbar-expand-lg navbar-${darkMode?'dark':'light'} bg-${darkMode?'dark':'light'}`}>
      <div className="container-fluid">
        <img src={Logo} alt="Logo" style={{width:"35px",height:"35px"}} />
        <span className="navbar-brand">NewsChimp</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Country
              </span>
              <ul className="dropdown-menu">
                <li><button className="dropdown-item" onClick={() => setLocale('in')}>India</button></li>
                <li><button className="dropdown-item" onClick={() => setLocale('en')}>USA</button></li>
                <li><button className="dropdown-item" onClick={() => setLocale('cn')}>China</button></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">General</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/business">Business</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/entertainment">Entertainment</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/politics">Politics</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/science">Science</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/sports">Sports</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/tech">Technology</NavLink>
            </li>
          </ul>
        </div>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={() => setDarkMode(!darkMode)} />
          <label className={`form-check-label text-${darkMode?"light":"dark"}`} htmlFor="flexSwitchCheckDefault">{darkMode?"Light Mode":"Dark Mode"}</label>
        </div>
      </div>
    </nav>
  )
}
