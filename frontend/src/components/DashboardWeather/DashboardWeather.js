import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './DashboardWeather.module.css';
import axios from 'axios';
import Weather from './Weather/Weather'

const Dashboard = (props) => {
  return (<Weather idWidget={props.idWidget}></Weather>)
};

Dashboard.propTypes = {};

Dashboard.defaultProps = {};

export default Dashboard;
