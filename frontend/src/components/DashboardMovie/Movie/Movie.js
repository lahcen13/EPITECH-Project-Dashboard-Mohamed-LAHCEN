import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Movie.module.css';
import { propTypes } from 'react-bootstrap/esm/Image';
import axios from 'axios';

const Movie = () => {

  let [data, setData] = useState({})
  let [films, setFilms] = useState([])
  let [title, setTitle] = useState([]);
  let [img, setImg] = useState([]);
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=868d26a70ca0a068164556b7dbd5f7fc&language=fr`)
      .then(response => {
        setData(response.data.results);
      })
  }, [])

  const iterate = () => {
    for (let key in data) {
      // setFilms(...films, {image:data[key].backdrop_path, imag:data[key].original_title})
      title[key] = data[key].original_title
      img[key] = data[key].backdrop_path
    }


  }
  return (

    <div className="container">
      {films == false ? iterate() : ""}
      <center>
        <div className={styles.width}>
          <div className={styles.header + " row justify-content-between"}>
            <center>Movies</center>
          </div>

          <div className={styles.test + " " + styles.padding + " row justify-content-between"}>
            <div className="col-5 col-sm-5 col-md-5 col-lg-3">

              <div className="row">
                <center><img className={styles.img} src={"https://image.tmdb.org/t/p/w500" + img[0]}></img></center>
              </div>
              <div className="row">
                <center>TOP 1</center>
              </div>
              <div className="row">
                <center><h6>{title[0]}</h6></center>
              </div>
            </div>
            <div className="col-5 col-sm-5 col-md-5 col-lg-3">

              <div className="row">
                <center><img className={styles.img} src={"https://image.tmdb.org/t/p/w500" + img[1]}></img></center>
              </div>
              <div className="row">
                <center>TOP 2</center>
              </div>
              <div className="row">
                <center><h6>{title[1]}</h6></center>
              </div>
            </div>
            <div className="col-5 col-sm-5 col-md-5 col-lg-3">

              <div className="row">
                <center><img className={styles.img} src={"https://image.tmdb.org/t/p/w500" + img[2]}></img></center>
              </div>
              <div className="row">
                <center>TOP 3</center>
              </div>
              <div className="row">
                <center><h6>{title[2]}</h6></center>
              </div>
            </div>
            <div className="col-5 col-sm-5 col-md-5 col-lg-3">

              <div className="row">
                <center><img className={styles.img} src={"https://image.tmdb.org/t/p/w500" + img[3]}></img></center>
              </div>
              <div className="row">
                <center>TOP 4</center>
              </div>
              <div className="row">
                <center><h6>{title[3]}</h6></center>
              </div>
            </div>
          </div>
          <div className={styles.test + " " + styles.padding + " row justify-content-between"}>
            <div className="col-5 col-sm-5 col-md-5 col-lg-3">

              <div className="row">
                <center><img className={styles.img} src={"https://image.tmdb.org/t/p/w500" + img[4]}></img></center>
              </div>
              <div className="row">
                <center>TOP 5</center>
              </div>
              <div className="row">
                <center><h6>{title[4]}</h6></center>
              </div>
            </div>
            <div className="col-5 col-sm-5 col-md-5 col-lg-3">

              <div className="row">
                <center><img className={styles.img} src={"https://image.tmdb.org/t/p/w500" + img[5]}></img></center>
              </div>
              <div className="row">
                <center>TOP 6</center>
              </div>
              <div className="row">
                <center><h6>{title[5]}</h6></center>
              </div>
            </div>
            <div className="col-5 col-sm-5 col-md-5 col-lg-3">

              <div className="row">
                <center><img className={styles.img} src={"https://image.tmdb.org/t/p/w500" + img[6]}></img></center>
              </div>
              <div className="row">
                <center>TOP 7</center>
              </div>
              <div className="row">
                <center><h6>{title[6]}</h6></center>
              </div>
            </div>
            <div className="col-5 col-sm-5 col-md-5 col-lg-3">

              <div className="row">
                <center><img className={styles.img} src={"https://image.tmdb.org/t/p/w500" + img[7]}></img></center>
              </div>
              <div className="row">
                <center>TOP 8</center>
              </div>
              <div className="row">
                <center><h6>{title[7]} </h6></center>
              </div>
            </div>
          </div>
        </div>
      </center>
    </div >
  )
};




Movie.propTypes = {};

Movie.defaultProps = {};

export default Movie;
