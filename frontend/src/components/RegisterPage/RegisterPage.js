import React from 'react';
import PropTypes from 'prop-types';
import styles from './RegisterPage.module.css';
import Navbarr from '../Navbarr/Navbarr';
import Widgets from '../Widgets/Widgets';
import RegisterForm from '../RegisterForm/RegisterForm';
import Footer from '../Footer/Footer';
import MainHeroSection from '../MainHeroSection/MainHeroSection';

const RegisterPage = () => (
  <div>
    <Navbarr></Navbarr>
    <div className={styles.Container}>
      <MainHeroSection
        heading = "Register here.And Take control."
        description = "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble"
        ctaone= "Dashboard"
        ctatwo = "Contact"
      >

      </MainHeroSection>
      <RegisterForm></RegisterForm>
      <Footer></Footer>
    </div>
  </div>
);

RegisterPage.propTypes = {};

RegisterPage.defaultProps = {};

export default RegisterPage;
