import React from 'react';
import PropTypes from 'prop-types';
import styles from './LoginPage.module.css';
import Navbarr from '../Navbarr/Navbarr';
import LoginForm from '../LoginForm/LoginForm';
import Footer from '../Footer/Footer';
import MainHeroSection from '../MainHeroSection/MainHeroSection';
import { initializeApp } from 'firebase/app';


const LoginPage = () => (
  <div>
    <Navbarr></Navbarr>
    <div className={styles.Container}>
      <MainHeroSection
        heading = "Welcome Back. Glad you're here."
        description = "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble"
        ctaone= "Dashboard"
        ctatwo = "Contact"
      >

      </MainHeroSection>
      <LoginForm></LoginForm>
      <Footer></Footer>
    </div>
  </div>
);

LoginPage.propTypes = {};

LoginPage.defaultProps = {};

export default LoginPage;
