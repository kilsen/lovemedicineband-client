import React from 'react';
import {NavLink} from 'react-router-dom';
import classNames from 'classnames';

const Header = () => {
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
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <NavLink className="navbar-brand" to="/">
              <img
                alt="Love Medicine"
                src="/img/logo-wide.png"
              />
            </NavLink>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><NavLink to="/" className={({isActive}) => classNames({'nav-link': true, 'active': isActive})}>HOME</NavLink></li>
              <li><NavLink to="shows" className={({isActive}) => classNames({'nav-link': true, 'active': isActive})}>SHOWS</NavLink></li>
              <li><NavLink to="meet" className={({isActive}) => classNames({'nav-link': true, 'active': isActive})}>MEET THE BAND</NavLink></li>
              <li><NavLink to="gallery" className={({isActive}) => classNames({'nav-link': true, 'active': isActive})}>GALLERY</NavLink></li>
              <li><NavLink to="epk" className={({isActive}) => classNames({'nav-link': true, 'active': isActive})}>EPK</NavLink></li>
              <li><NavLink to="contact" className={({isActive}) => classNames({'nav-link': true, 'active': isActive})}>CONTACT US</NavLink></li>
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