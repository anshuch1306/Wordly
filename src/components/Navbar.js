import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
export default function Navbar(props) {
  return (
     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
        <div className="container-fluid d-flex align-items-center">

          <Link className="navbar-brand" to="/">
            <strong>{props.title}</strong>
          </Link>

            
            <div className="d-flex align-items-center">
            <ul className="navbar-nav flex-row ">

              <li className="nav-item mx-4">
                <Link
                  className="nav-link "
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item mx-4">
                <Link className="nav-link" to="/about">
                  {props.feature}
                </Link>
              </li>

              <li className="nav-item mx-4">
                <a className="nav-link" href="/">
                  Explore
                </a>
              </li>

              <li className="nav-item mx-4">
                <a
                  className="nav-link "
                  href="/"
                
                >
                  Support
                </a>
              </li>

            </ul>
        
          </div>    
        <div className={`form-check form-switch ms-auto text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" onChange={props.toggleMode} id="switchCheckDefault"/>
  <label className="form-check-label" htmlFor="switchCheckDefault">Change Mode</label>
</div>
        </div>
      </nav>


)
}

Navbar.propTypes ={
    title: PropTypes.string,
    feature: PropTypes.string
};

