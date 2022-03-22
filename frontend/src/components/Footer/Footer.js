import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';
import { auth, db, logout } from "../../firebase";

const Footer = () => (
  <div className={styles.Footer}>
<div class="b-example-divider"></div>

<div class="container">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Dashboard</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Widgets</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">My Account</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Register</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Login</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted" onClick={logout}>Log out</a></li>
    </ul>
    <p class="text-center text-muted">&copy; Dashboard</p>
  </footer>
</div>
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
