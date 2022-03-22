import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form'
import styles from './FormSettings.module.css';
import Button from 'react-bootstrap/Button'
import axios from 'axios';


const FormNews = (props) => {
    let [data, setData] = useState({});
    let [dataSubmit, setDataSubmit] = useState({ news: "" })
    let [userData, setUserData] = useState()
    let [news, setNews] = useState(["war", "government", "politics", "education", "environment", "economy", "business", "fashion", "entertainment", "Sport", "cryptocurrency", "technology", "biology"])
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
        let id = 0;
        userData.map((e, key) => key === 2 ? id = e.id : "");
        axios({
            method: 'post',
            url: 'http://localhost:8080/widget/setting',
            headers: {},
            data: {
                id: id,
                setting: dataSubmit.news,
                position: "2",
            }
        }).then(
            console.log("success")
        );

    }


    const updateData = (input) => {
        setDataSubmit({ ...dataSubmit, [input.target.name]: input.target.value })
    }

    return (
        <>
            <Form.Group controlId="FirstCurrency">
                <Form.Label>News topic's</Form.Label>
                <Form.Select name="news" id="news" onChange={(e) => updateData(e)} >
                    {news && news.map((e, key) => <option value={e}>{e}</option>)}
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


FormNews.propTypes = {};

FormNews.defaultProps = {};

export default FormNews;
