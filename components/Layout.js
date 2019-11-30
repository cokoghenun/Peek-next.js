import NavBar from './NavBar';
import { useState, useRef } from 'react';

const layoutStyle = {
  width: '100vw',
  height: '100vh'
};

const navStyle = {
  left: 0,
  opacity: 1,
  pointerEvents: 'inherit',
  visibility: '0s linear 0s',
  transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
};

const Layout = ({ children, labels }) => {
  const nav = useRef(null);
  const handleNavClick = e => {
    e.stopPropagation();
    if (e.target.tagName == 'IMG') {
      nav.current.classList.add('nav--active');
    } else if (nav.current.classList.contains('nav--active')) {
      nav.current.classList.remove('nav--active');
    }
  };
  return (
    <div style={layoutStyle} onClick={handleNavClick}>
      <img src='/image/icon/hamburger.svg' onClick={handleNavClick} />
      <NavBar ref={nav} labels={labels} />
      {children}
    </div>
  );
};
export default Layout;
