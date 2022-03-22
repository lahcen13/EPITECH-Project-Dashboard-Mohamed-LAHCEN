import React, { useState, useEffect } from 'react';
import styles from './Weather.module.css';
import axios from 'axios';

const Dashboard = (props) => {
  let [weather, setWeather] = useState({ temperature: "", wind: "", weather: "" });

  let [city, setCity] = useState();
  let [dateTime, setDateTime] = useState({ date: "", time: "" })
  useEffect(() => {
    // axios({
    //   method: "post",
    //   url: "https://api.twitch.tv/kraken/games/top",
    //   data: {
    //     client_id: "cnm3sujmvpsqoayu6ci6v9e805wtmd",
    //     client_secret: "yM4llhomCjQzfAFgCf+D5L4Ib5FwO8XjVATNnMwv/jU=",
    //     grant_type: "client_credentials"
    //   },
    //   headers: { "Accept": "application/vnd.twitchtv.v5+json" },

    // })
      // .then(resp => {
      //   console.log(resp)
      //   console.log("hello")
      // })catch{}
    if (props.idWidget) {
      console.log("this widget : " + props.idWidget)
      axios.get(`http://localhost:8080/widget/widgetSettings?idWidget=${props.idWidget}`)
        .then(response => {
          axios.get(`http://api.openweathermap.org/data/2.5/weather?lang=fr&q=${response.data[0]}&appid=a81c546c08057d051733953c668e6342`)
            .then(response => {
              console.log(response.data)
              setWeather({ temperature: response.data.main.temp, wind: response.data.wind.speed, weather: response.data.weather[0].main })
            })
          axios.get(`https://api.ipgeolocation.io/timezone?apiKey=e22c7858dd7242b0a11a4d5a63d51c84&tz=Europe/Paris`)
            .then(response => {
              setDateTime({ date: response.data.date, time: response.data.time_24 })

            }).catch(response => {
              console.log(response)
            })
        })

    }

  }, [props.idWidget])




  return (
    <div className="container">
      <div className="row justify-content-between">
        <div className={styles.container + " col-sm-4 col-md-4"}>
          <div className="container">
            <div className="row">
              <center>date and time</center>
            </div>
            <div className="row">
              <center><h1>{dateTime.time}</h1></center>
            </div>
            <div className="row">
              <center><h4> {dateTime.date} </h4> </center>

            </div>
          </div>
        </div>
        <div className={styles.container + " col-sm-3 col-md-3"}>
          <div className="container">
            <div className="row">
              <center>Weather</center>
            </div>
            <div className="row">
              <center><h1>  {weather.wind} m/s </h1></center>
            </div>
            <div className="row">
              <center><h4> {weather.weather}  </h4> </center>

            </div>
          </div>
        </div>

        <div className={styles.container + " col-sm-4 col-md-4"}>
          <div className="container">
            <div className="row justify-content-between">
              <center>
                <div className="col-sm-3">
                  Temperature
                </div>
              </center>
            </div>
            <br></br>
            <div className="row justify-content-between">
              <div className="col-sm-3">
                <h1>{Math.round(weather.temperature) + '°F'}</h1>
              </div>

              <div className="col-sm-4">
                <svg class="svg-icon" viewBox="0 0 20 20">
                  <path fill="none" d="M5.114,5.726c0.169,0.168,0.442,0.168,0.611,0c0.168-0.169,0.168-0.442,0-0.61L3.893,3.282c-0.168-0.168-0.442-0.168-0.61,0c-0.169,0.169-0.169,0.442,0,0.611L5.114,5.726z M3.955,10c0-0.239-0.193-0.432-0.432-0.432H0.932C0.693,9.568,0.5,9.761,0.5,10s0.193,0.432,0.432,0.432h2.591C3.761,10.432,3.955,10.239,3.955,10 M10,3.955c0.238,0,0.432-0.193,0.432-0.432v-2.59C10.432,0.693,10.238,0.5,10,0.5S9.568,0.693,9.568,0.932v2.59C9.568,3.762,9.762,3.955,10,3.955 M14.886,5.726l1.832-1.833c0.169-0.168,0.169-0.442,0-0.611c-0.169-0.168-0.442-0.168-0.61,0l-1.833,1.833c-0.169,0.168-0.169,0.441,0,0.61C14.443,5.894,14.717,5.894,14.886,5.726 M5.114,14.274l-1.832,1.833c-0.169,0.168-0.169,0.441,0,0.61c0.168,0.169,0.442,0.169,0.61,0l1.833-1.832c0.168-0.169,0.168-0.442,0-0.611C5.557,14.106,5.283,14.106,5.114,14.274 M19.068,9.568h-2.591c-0.238,0-0.433,0.193-0.433,0.432s0.194,0.432,0.433,0.432h2.591c0.238,0,0.432-0.193,0.432-0.432S19.307,9.568,19.068,9.568 M14.886,14.274c-0.169-0.168-0.442-0.168-0.611,0c-0.169,0.169-0.169,0.442,0,0.611l1.833,1.832c0.168,0.169,0.441,0.169,0.61,0s0.169-0.442,0-0.61L14.886,14.274z M10,4.818c-2.861,0-5.182,2.32-5.182,5.182c0,2.862,2.321,5.182,5.182,5.182s5.182-2.319,5.182-5.182C15.182,7.139,12.861,4.818,10,4.818M10,14.318c-2.385,0-4.318-1.934-4.318-4.318c0-2.385,1.933-4.318,4.318-4.318c2.386,0,4.318,1.933,4.318,4.318C14.318,12.385,12.386,14.318,10,14.318 M10,16.045c-0.238,0-0.432,0.193-0.432,0.433v2.591c0,0.238,0.194,0.432,0.432,0.432s0.432-0.193,0.432-0.432v-2.591C10.432,16.238,10.238,16.045,10,16.045"></path>
                </svg>
              </div>
            </div>
            <br></br>
            <div className="row justify-content-between">
              <div className="col-1">
                Sab
                <br></br>
                4°
              </div>
              <div className="col-1">
                Sun
                <br></br>
                4°
              </div>
              <div className="col-1">
                Mon
                <br></br>
                4°
              </div>
              <div className="col-1">
                Tue
                <br></br>
                4°
              </div>
              <div className="col-1">
                Wed
                <br></br>
                4°
              </div>
              <div className="col-1">
                Thu
                <br></br>
                4°
              </div>
              <div className="col-1">
                Fri
                <br></br>
                4°
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

};

Dashboard.propTypes = {};
Dashboard.defaultProps = {};
export default Dashboard;
