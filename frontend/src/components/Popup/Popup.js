import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Popup.module.css';
import Form from 'react-bootstrap/Form'
import FormCity from './FormSettings/FormCity';
import FormCurrency from './FormSettings/FormCurrency';
import FormNews from './FormSettings/FormNews';
import axios from 'axios';
import Button from 'react-bootstrap/Button';



const Popup = (props) => {
  const [bool, setBool] = useState(props.activate)
  const [activate, setActivate] = useState(false);
  const [deactivate, setDeactivate] = useState(false);
  const [display, setDisplay] = useState(true)

  useEffect(() => {
    console.log("id est " + props.idUserWidget + " activation est :" + props.activate)
    if (activate) {
      axios({
        method: 'post',
        url: 'http://localhost:8080/widget/activate',
        headers: {},
        data: {
          id: props.idUserWidget,
        }
      }).then(
        console.log('activated') & setActivate(false) & setBool(true)
      );
    }
    if (deactivate) {
      axios({
        method: 'post',
        url: 'http://localhost:8080/widget/deactivate',
        headers: {},
        data: {
          id: props.idUserWidget,
        }
      }).then(
        console.log('deactivated') & setDeactivate(false) & setBool(false)
      );
    }
    if (display == false) {
      props.display();
    }
  })

  return (
    <div className="row">
      <div className={styles.Popup}>
        <div className={"col-11 col-sm-7 col-md-5  " + styles.background}>
          <h3>Settings</h3>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="switch"
              id="custom-switch"
              label="activate/desactivate "
              checked={bool == true ? true : false}
              onClick={() => bool ? setDeactivate(true) : setActivate(true)}
            />
          </Form.Group>

          {props.form == "currency" ? <FormCurrency onClick={() => setDisplay(false)} /> : ""}
          {props.form == "news" ? <FormNews onClick={() => setDisplay(false)} /> : ""}
          {props.form == "city" ? <FormCity onClick={() => setDisplay(false)} /> : ""}
          {props.form == "" ? <div className={styles.row + " row justify-content-between"}>
            <div className="col-4">
              <Button variant="primary" className={styles.button} onClick={() => window.location.href = "widgets"}>
                submit
              </Button>
            </div>
            <div className="col-4">
              <Button variant="secondary" className={styles.button} onClick={() => setDisplay(false)}>
                close
              </Button>
            </div>
          </div> : ""}
        </div>
      </div>
    </div>
  )
};

Popup.propTypes = {};

Popup.defaultProps = {};

export default Popup;
