import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styles from './FormSettings.module.css';

import { propTypes } from 'react-bootstrap/esm/Image';
import axios from 'axios';


const FormCity = (props) => {
  let [data, setData] = useState({});
  let [dataSubmit, setDataSubmit] = useState({ city: "Paris" })
  let [userData, setUserData] = useState()
  let [citys, setCitys] = useState(["Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille", "Rennes", "Toulon", "Grenoble", "Dijon", "Nîmes", "Angers", "Villeurbanne"])

  useEffect(() => {
    axios.get(`http://localhost:8080/user/connected?mail=${sessionStorage.getItem('email')}`)
      .then(response => {
        axios({
          method: 'post',
          url: 'http://localhost:8080/widget/activated',
          headers: {},
          data: {
            id: response.data.id,
          }
        }).then(
          response => setUserData(response.data)
        );
      })
  }, [])
  const onSubmit = () => {
    let id = "";
    userData.map((e, key) => key === 3 ? id = e.id : "");
    axios({
      method: 'post',
      url: 'http://localhost:8080/widget/setting',
      headers: {},
      data: {
        id: `${id}`,
        setting: `${dataSubmit.city}`,
        position: "",
      }
    }).then(
      console.log('success')
    );
  }


  const updateData = (input) => {
    setDataSubmit({ ...dataSubmit, [input.target.name]: input.target.value })
  }

  return (

    <>
      <Form.Group controlId="FirstCurrency">
        <Form.Label>City's</Form.Label>
        <Form.Select name="city" id="city" onChange={(e) => updateData(e)} >
          {citys && citys.map((e, key) => <option value={e}>{e}</option>)}
        </Form.Select>

      </Form.Group>
      <div className={styles.row + " row justify-content-between"}>
        <div className="col-4">
          <Button variant="primary" className={styles.button} onClick={() => onSubmit()}>
            submit
          </Button>
        </div>
        <div className="col-4">
          <Button variant="secondary" className={styles.button} onClick={() => props.onClick()}>
            close
          </Button>
        </div>
      </div>
    </>


  )

}


FormCity.propTypes = {};

FormCity.defaultProps = {};

export default FormCity;
