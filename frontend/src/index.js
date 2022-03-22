import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PageWidgets from './components/PageWidgets/PageWidgets';
import PageMyaccount from './components/PageMyaccount/PageMyaccount';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage';
import PageYouTube from './components/DashboardYouTube/DashboardYouTube'

import PageContact from './components/PageContact/PageContact';
import { Navbar } from 'react-bootstrap';
import PageDashboard from './components/PageDashboard/PageDashboard';
import DashboardWeather from './components/DashboardWeather/DashboardWeather';
import ResetForm from './components/ResetForm/ResetForm';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/">
      </Route>
      <Route path="/widgets">
        <PageWidgets></PageWidgets>
      </Route>
      <Route path="/register">
        <RegisterPage></RegisterPage>
      </Route>
      <Route path="/login">
        <LoginPage></LoginPage>
      </Route>
      <Route path="/contact">
        <PageContact></PageContact>
      </Route>
      <Route path="/Myaccount">
        <PageMyaccount></PageMyaccount>
      </Route>
      <Route path="/dashboard">
        <PageDashboard></PageDashboard>
      </Route>
      <Route path="/YouTube">
        <PageYouTube></PageYouTube>
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
