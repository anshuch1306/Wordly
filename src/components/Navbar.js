import React from 'react'
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
        <div className="container-fluid">

          <a className="navbar-brand" href="/">
            {props.title}
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

              <li className="nav-item">
                <to
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </to>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  {props.feature}
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Explore
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  aria-disabled="true"
                >
                  Support
                </a>
              </li>

            </ul>
          </div>

        </div>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" onChange={props.toggleMode} id="switchCheckDefault"/>
  <label className="form-check-label" htmlFor="switchCheckDefault">Change Mode</label>
</div>
      </nav>
  )
}

Navbar.propTypes ={
    title: PropTypes.string,
    feature: PropTypes.string
};

