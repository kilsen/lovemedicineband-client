import React, {useRef} from 'react';
import {NavLink} from 'react-router-dom';
import classNames from 'classnames';

const Header = () => {
  const navButtonRef = useRef(null);
  const linksContainerRef = useRef(null);

  function collapseNav() {
    navButtonRef.current.classList.add('collapsed');
    linksContainerRef.current.classList.remove('in');
  }

  return (
    <section id="header">
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
          {/* Brand and toggle get grouped for better mobile display*/}
          <div className="navbar-header">
            <button
              className="navbar-toggle"
              type="button"
              data-toggle="collapse"
              data-target="#lm-navbar"
              ref={navButtonRef}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <NavLink className="navbar-brand" to="/" onClick={collapseNav}>
              <img
                alt="Love Medicine"
                src="/img/logo-wide.png"
              />
            </NavLink>
          </div>
          <div className="collapse navbar-collapse" id="lm-navbar" ref={linksContainerRef}>
            <ul className="nav navbar-nav navbar-right">
              <li><NavLink to="/" className={({isActive}) => classNames({'nav-link': true, 'active': isActive})} onClick={collapseNav}>HOME</NavLink></li>
              <li><NavLink to="shows" className={({isActive}) => classNames({'nav-link': true, 'active': isActive})} onClick={collapseNav}>SHOWS</NavLink></li>
              <li><NavLink to="meet" className={({isActive}) => classNames({'nav-link': true, 'active': isActive})} onClick={collapseNav}>MEET THE BAND</NavLink></li>
              <li><NavLink to="gallery" className={({isActive}) => classNames({'nav-link': true, 'active': isActive})} onClick={collapseNav}>GALLERY</NavLink></li>
              <li><NavLink to="epk" className={({isActive}) => classNames({'nav-link': true, 'active': isActive})} onClick={collapseNav}>EPK</NavLink></li>
              <li><NavLink to="contact" className={({isActive}) => classNames({'nav-link': true, 'active': isActive})} onClick={collapseNav}>CONTACT US</NavLink></li>
            </ul>
          </div>
          {/* /.navbar-collapse*/}
        </div>
        {/* /.container-fluid*/}
      </nav>
    </section>
  );
};

export default Header;