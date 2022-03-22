import React from 'react';
import PropTypes from 'prop-types';
import styles from './PageMyaccount.module.css';
import Navbarr from '../Navbarr/Navbarr';

import MyaccountForm from '../MyaccountForm/MyaccountForm';

const PageMyaccount = () => (
  <div>
    <Navbarr />
    <div className={styles.margin + " container"} >
      <MyaccountForm></MyaccountForm>
    </div>
  </div>
);

PageMyaccount.propTypes = {};

PageMyaccount.defaultProps = {};

export default PageMyaccount;
