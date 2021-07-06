import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from "./Button";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const changeColor = (color) => {
    this.setState({ color });
  };

  useEffect(() => {
    // on refresh we don't want to see our button when we are in mobile size
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            ReactWorld
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/TaskManager'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Task Manager
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Crypto'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Crypto
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/BreakingBad'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                BreakingBad
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
