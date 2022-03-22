import React from 'react';
import PropTypes from 'prop-types';
import styles from './DashboardConvert.module.css';
import Convert from './Convert/Convert';

const DashboardConvert = (props) => (
  <Convert idWidget={props.idWidget}></Convert>
);

DashboardConvert.propTypes = {};

DashboardConvert.defaultProps = {};

export default DashboardConvert;
