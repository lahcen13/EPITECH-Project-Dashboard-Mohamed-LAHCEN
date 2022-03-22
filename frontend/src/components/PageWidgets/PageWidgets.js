import React from 'react';
import PropTypes from 'prop-types';
import styles from './PageWidgets.module.css';
import Navbarr from '../Navbarr/Navbarr';
import Widgets from '../Widgets/Widgets';

const PageWidgets = () => (
  <div>
    <Navbarr></Navbarr>
    <div className={styles.Container}>
      <Widgets></Widgets>
    </div>
  </div>
);


PageWidgets.propTypes = {};

PageWidgets.defaultProps = {};

export default PageWidgets;

