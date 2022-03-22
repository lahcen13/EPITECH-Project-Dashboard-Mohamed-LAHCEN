import React from 'react';
import PropTypes from 'prop-types';
import styles from './DashboardMovie.module.css';
import Movie from './Movie/Movie';
const DashboardMovie = () => (
  <div className={styles.DashboardMovie}>
    <Movie></Movie>
  </div>
);

DashboardMovie.propTypes = {};

DashboardMovie.defaultProps = {};

export default DashboardMovie;
