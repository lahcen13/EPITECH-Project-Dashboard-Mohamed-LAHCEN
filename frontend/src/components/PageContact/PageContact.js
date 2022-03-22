import React from 'react';
import PropTypes from 'prop-types';
import styles from './PageContact.module.css';
import Navbarr from '../Navbarr/Navbarr';
import Footer from '../Footer/Footer';
import MainHeroSection from '../MainHeroSection/MainHeroSection';

const PageContact = () => (
  <div className={styles.PageContact}>
    <Navbarr></Navbarr>
    <MainHeroSection
        heading = "Contact us. We solve problems."
        description = "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble"
        ctaone= "Dashboard"
        ctatwo = "Widgets"
      >
    </MainHeroSection>
    <Footer></Footer>
  </div>
);

PageContact.propTypes = {};

PageContact.defaultProps = {};

export default PageContact;
