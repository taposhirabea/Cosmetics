import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
        return ( <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
              Cosmetics
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/home">
                  Home
              </NavLink>
              <NavLink className="nav-item nav-link" to="/product">
                  Product
              </NavLink>
              <NavLink className="nav-item nav-link" to="/account">
                  Account
              </NavLink>
              
            </div>
          </div>
      </nav>
        );
    }
 
export default NavBar;