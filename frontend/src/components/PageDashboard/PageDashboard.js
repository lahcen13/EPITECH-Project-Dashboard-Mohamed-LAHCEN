import React, { useEffect, useState } from 'react';
import styles from './PageDashboard.module.css';
import DashboardSpotify from '../DashboardSpotify/DashboardSpotify';
import DashboardWeather from '../DashboardWeather/DashboardWeather';
import Navbarr from '../Navbarr/Navbarr';
import DashboardNews from '../DashboardNews/DashboardNews';
import DashboardMovie from '../DashboardMovie/DashboardMovie';
import DashboardConvert from '../DashboardConvert/DashboardConvert';
import MainHeroSection from '../MainHeroSection/MainHeroSection';
import axios from 'axios';
import { email, mail } from '../../firebase';
import PageYouTube from '../DashboardYouTube/DashboardYouTube'


const PageDashboard = () => {
  let [activated, setActivated] = useState({ music: false, convert: false, news: false, weather: false, steam: false, games: false });
  let [idWidget, setIdWidget] = useState({})
  let [user, setUser] = useState({})

  function activatedIsFalse() {
    let array = ["music", "convert", "news", "weather", "steam", "games"];
    let count = 0;
    array.forEach(element => {
      if (activated[element] === false)
        count++
    });
    if (count == 6) {
      return true;
    } else {
      return false;
    }
  }

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
          response => setActivated({ music: response.data[0].activate, convert: response.data[1].activate, news: response.data[2].activate, weather: response.data[3].activate, steam: response.data[4].activate, games: response.data[5].activate }) & console.log(response.data[5].id)
            & setIdWidget({ music: response.data[0].id, convert: response.data[1].id, news: response.data[2].id, weather: response.data[3].id, steam: response.data[4].id, games: response.data[5].id })
            & console.log(idWidget.news)
        );
      })
  }, [])
  console.log(sessionStorage.getItem('mail'))
  return (
    <div className={styles.PageDashboard}>
      <Navbarr></Navbarr>
      {
        activatedIsFalse() == false
          ?
          <MainHeroSection
            heading="Welcome on your Dashboard."
            description="Here you can find all you widgets, feel free to use all of them!"
            ctaone="Configure Widgets"
            ctatwo="Contact" />
          :
          <MainHeroSection
            heading="Welcome on your Dashboard."
            description="No widgets are activated for the moment, please activate them in the settings."
            ctaone="Configure Widgets"
            ctatwo="Contact" />
      }
      <div className={styles.padding}>
        {activated.convert ? <DashboardConvert idWidget={idWidget.convert} /> : ""}
      </div>
      <div className={styles.padding}>

        {activated.games ? " " : ""}
      </div>
      <div className={styles.padding}>
       <center> <PageYouTube></PageYouTube>  </center>
      </div>
      <div className={styles.padding}>

        {activated.news ? <DashboardNews idWidget={idWidget.news} /> : ""}
      </div>
      <div className={styles.padding}>

        {activated.music ? <DashboardSpotify /> : ""}
      </div>
      <div className={styles.padding}>

        {activated.weather ? <DashboardWeather idWidget={idWidget.weather} /> : ""}
      </div>
      <div className={styles.padding}>

        {activated.steam ? <DashboardMovie /> : ""}
      </div>
    </div>
  )
}



PageDashboard.propTypes = {};

PageDashboard.defaultProps = {};

export default PageDashboard;
