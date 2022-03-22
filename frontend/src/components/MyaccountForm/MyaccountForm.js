import React from 'react';
import PropTypes from 'prop-types';
import styles from './MyaccountForm.module.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const MyaccountForm = () => (
  <div className={styles.box}>
    <h3>My account</h3>
    <div className={"row justify-content-between"}>
      <div className={styles.profil1 + " col-12 col-sm-4"}>
        <div className={"row"}>
          <center>
            <img className={styles.img + " circle"} src="https://picsum.photos/100/100"  ></img>
          </center>
        </div>
        <div className="row">
          <center>
            <h2>Katarina smith</h2>
          </center>
        </div>
        <div className="row">
          <center>
            <h4>California</h4>
          </center>
        </div>
      </div>
      <div className={styles.profil2 + " col-12 col-sm-7"}>
        <h4>Profile</h4>
        <h6>The information can be edited</h6>
        <Form>
          <div className="row justify-content-between">
            <div className="col-6 ">
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" name="firstName" placeholder="Enter first name" />
              </Form.Group>
            </div>
            <div className="col-6">
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="x²" name="name" placeholder="Enter name" />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" />
              </Form.Group>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-6">
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Enter password" />
              </Form.Group>
            </div>
            <div className="col-6">
              <Form.Group className="mb-3" controlId="passwordConfirm">
                <Form.Label>Confirm</Form.Label>
                <Form.Control type="password" name="passwordConfirm" placeholder="Confirm password" />
              </Form.Group>
            </div>
          </div>
        </Form>
        <div className={"row " + styles.button}>
          <Button variant="primary">Save details</Button>
        </div>
      </div>

    </div>

  </div>
);

MyaccountForm.propTypes = {};

MyaccountForm.defaultProps = {};

export default MyaccountForm;
