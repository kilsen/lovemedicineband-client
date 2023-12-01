import React from 'react';
import {Link} from 'react-router-dom';
const Header = props => {
  return (
    <section id="footer_main">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 padding_all">
            <div className="col-sm-8">
              <div className="footer_main_1">
                <p>© 2023 Love Medicine. All Rights Reserved. <span className="small">(Design by <Link to="http://www.TemplateOnWeb.com" target="_blank">Template On Web</Link>)</span></p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="footer_main_2">
                <ul>
                  <li>Follow us!</li>
                  <li><Link to="https://facebook.com/LoveMedicineBand" target="_blank"><i className="fa fa-facebook"></i></Link></li>
                  <li><Link to="https://instagram.com/LoveMedicineBand" target="_blank"><i className="fa fa-instagram"></i></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;