import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styles from './FormSettings.module.css';
import axios from 'axios';
import { Table } from 'react-bootstrap';


const FormCurrency = (props) => {
    let [currencies, setCurrencies] = useState({});
    let [listCurrencies, setListCurrencies] = useState([]);
    let [data, setData] = useState({ currency1: "", currency2: "" });
    let [userData, setUserData] = useState({});
    let [userWidgetId, setUserWidgetId] = useState({ id: "" });
    useEffect(() => {
        axios.get(`http://localhost:8080/listCurrencies`)
            .then(response => setCurrencies(response.data.results)
            );

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
    },
        []);
    const updateData = (input) => {
        setData({ ...data, [input.target.name]: input.target.value })
        console.log(data);

    }
    const onSubmit = () => {
        let id = "";
        userData.map((e, key) => key === 1 ? id = e.id : "" & console.log(id)
        )
        axios({
            method: 'post',
            url: 'http://localhost:8080/widget/settings',
            headers: {},
            data: {
                id: `${id}`,
                position: `${1}`,
                setting: `${data.currency1}`
            }
        }).then(

        );
        axios({
            method: 'post',
            url: 'http://localhost:8080/widget/settings',
            headers: {},
            data: {
                id: `${id}`,
                position: `${2}`,
                setting: `${data.currency2}`
            }
        }).then(
            console.log('success')
        );
        // Simulate a mouse click:
        // window.location.href = "widgets";
    }


    const iterate = () => {
        for (let key in currencies) {
            listCurrencies.push(key)
        }
        console.log(listCurrencies);


    }
    return (
        <>
            {listCurrencies.length === 0 ? iterate() : ""}
            <Form.Group controlId="FirstCurrency">
                <Form.Label>From</Form.Label>
                <Form.Select name="currency1" id="currency1" onChange={(e) => updateData(e)} >
                    <option value="EUW">Default (EUW)</option>
                    {listCurrencies && listCurrencies.map((e, key) => <option value={e}>{e}</option>)}
                </Form.Select>
                <Form.Label>To</Form.Label>
                <Form.Select name="currency2" id="currency2" onChange={(e) => updateData(e)} >
                    <option value="USD">Default (USD)</option>
                    {listCurrencies && listCurrencies.map((e, key) => <option value={e}>{e}</option>)}
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


FormCurrency.propTypes = {};

FormCurrency.defaultProps = {};

export default FormCurrency;
