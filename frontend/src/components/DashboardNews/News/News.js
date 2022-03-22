import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './News.module.css';
import axios from 'axios';

const News = (props) => {
  let [data, setData] = useState({});
  let [titles, setTitles] = useState([]);
  let [description, setDescription] = useState([])
  let [url, setUrl] = useState([]);
  let [img, setImg] = useState([]);
  let [author, setAuhtor] = useState([]);


  useEffect(() => {
    let config = "";
    if (props.idWidget) {
      axios.get(`http://localhost:8080/widget/widgetSettings?idWidget=${props.idWidget}`)
        .then(response => {
          axios.get(`https://newsapi.org/v2/everything?q=${response.data[0]}&language=en&apiKey=ae88cf81cb214c46a37b4fb267a29179`)
            .then(response => {
              setData(response.data.articles)
            })
        })
    }





  }, [props.idWidget])

  const iterate = () => {
    console.log(data[1])
    for (let key in data) {
      titles[key] = data[key].title;
      description[key] = data[key].description;
      url[key] = data[key].url;
      img[key] = data[key].urlToImage;
      author[key] = data[key].author;
    }
  }



  return (
    <center>
      <div className="container">
        {titles == false ? iterate() : ""}
        <div className={styles.width}>
          <div className={styles.header + " row justify-content-between"}>
            <div className="col-sm-2">
              News
            </div>
            <div className="col-sm-2">
              [ICON]
            </div>
          </div>
          <div className={styles.test + " " + styles.padding + " row justify-content-between"}>
            <div className="col-sm-12 col-md-8">
              <div className="container">
                <div className={"row " + styles.titles}>
                  <a href={url[0]}>{titles[0]}</a>
                </div>
                <div className={"row " + styles.description}>
                  {description[0]}
                </div>
                <div className={"row " + styles.author}>
                  -  {author[0]}
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3">
              <center><img className={styles.img} src={img[0]}></img></center>
            </div>
          </div>
          <div className={styles.test + " " + styles.padding + " row justify-content-between"}>
            <div className="col-sm-12 col-md-8">
              <div className="container">
                <div className={"row " + styles.titles}>
                  <a href={url[1]}>{titles[1]}</a>
                </div>
                <div className={"row " + styles.description}>
                  {description[1]}
                </div>
                <div className={"row " + styles.author}>
                  -  {author[1]}
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3">
              <center><img className={styles.img} src={img[1]}></img></center>
            </div>
          </div>
          <div className={styles.test + " " + styles.padding + " row justify-content-between"}>
            <div className="col-sm-12 col-md-8">
              <div className="container">
                <div className={"row " + styles.titles}>
                  <a href={url[2]}>{titles[2]}</a>
                </div>
                <div className={"row " + styles.description}>
                  {description[2]}
                </div>
                <div className={"row " + styles.author}>
                  -  {author[2]}
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3">
              <center><img className={styles.img} src={img[2]}></img></center>
            </div>
          </div>
        </div>

      </div>
    </center>

  )
};


News.propTypes = {};

News.defaultProps = {};

export default News;
