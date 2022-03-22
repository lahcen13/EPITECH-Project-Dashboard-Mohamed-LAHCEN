import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Convert.module.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


const Convert = (props) => {
  const [currency, setCurrency] = useState({ currency1: "", currency2: "" })
  const [conversion, setConversion] = useState()
  useEffect(() => {
    if (props.idWidget) {
      axios.get(`http://localhost:8080/widget/widgetSettings?idWidget=${props.idWidget}`)
        .then(response => {
          setCurrency({ currency1: response.data[0], currency2: response.data[1] })

          axios.get(`https://free.currconv.com/api/v7/convert?q=${response.data[0] + '_' + response.data[1]}&compact=ultra&date=2021-01-10&apiKey=29a583d57017b5783fac`)
            .then(response => {
              console.log(response.data)
              setConversion(response.data)
            }).catch(response => {
              console.log(response)
            }
            )



        })
    }

  }, [props.idWidget])
  return (
    <div className="container">
      <center>
        <div className={styles.width}>

          <div className={styles.header + " row"}>
            <center>Converter</center>
          </div>
          <div className={styles.body + " row"}>
            <div className="row">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>First value</Form.Label>
                <Form.Control type="text" placeholder={currency.currency1} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Second value</Form.Label>
                <Form.Control type="text" placeholder={currency.currency2} />
              </Form.Group>

              <div className={styles.button}>
                <center>
                  <Button type="submit">Convert</Button>
                </center>
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
  )
};

Convert.propTypes = {};

Convert.defaultProps = {};

export default Convert;
