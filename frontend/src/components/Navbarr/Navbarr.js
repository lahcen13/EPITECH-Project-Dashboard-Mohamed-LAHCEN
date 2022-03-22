import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navbarr.module.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { auth, db, logout } from "../../firebase";


const Navbarr = () => (
  
        <div>
          <div className="b-example-divider" />
          <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
              <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                  <span>Dashboard.™</span>
              </a>
              <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="/widgets">Widgets</Nav.Link>
                <Nav.Link href="/Myaccount">My account</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link onClick={logout}>Logout</Nav.Link>
              </ul>
              <div className="col-md-3 text-end">
                            
              </div>
            </header>
          </div>
        </div>
      );

Navbarr.propTypes = {};

Navbarr.defaultProps = {};

export default Navbarr;
