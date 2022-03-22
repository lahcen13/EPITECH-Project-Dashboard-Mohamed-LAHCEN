import React from 'react';
import PropTypes from 'prop-types';
import styles from './DashboardNews.module.css';
import News from './News/News'

const DashboardNews = (props) => (
  <div className={styles.DashboardNews}>
    <News idWidget={props.idWidget}></News>
  </div>
);

DashboardNews.propTypes = {};

DashboardNews.defaultProps = {};

export default DashboardNews;
