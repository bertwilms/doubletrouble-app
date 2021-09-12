import React, { useState, useEffect } from "react";
import Scheduled from "../components/Scheduled.js" ;
import Wedstrijden from "../components/Wedstrijden.js"
import { wedstrijdData } from '../data/wedstrijdData';
import Container from "../components/container.component.js";
const axios = require('axios');
  

const WedstrijdPage = () => {  
  const [weatherdata, setWeatherData] = useState([]);
  useEffect(() => {
    console.log ("useeffect")
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    // Location TC Tessenderlo
    const longitude = 5.089368256628124 ; 
    const latitude = 51.079886573545316 ;

    var url = `https://api.openweathermap.org/data/2.5/onecall?appid=${API_KEY}&lat=${latitude}&lon=${longitude}&exclude=hourly,minutely,current&units=metric&lang=nl` ;

    // GET request using axios inside useEffect React hook
    axios.get( url )
        .then(response => setWeatherData(response.data))
        .catch(function (error) {console.log(error);});

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);

  
  var scheduled = wedstrijdData.filter(function(wedstrijd) {
    return wedstrijd.tijd !== null && wedstrijd.ploeg1 === null ;
  }) ;
  var tespelen = wedstrijdData.filter(function(wedstrijd) {
    return wedstrijd.tijd === null && wedstrijd.ploeg1 === null ;
  }) ;
  

  const formatWeaterData = (datum, uur) => {
    console.log (weatherdata);
    console.log (typeof weatherdata.hourly[0]);
    //const searchDate = datum + " " + uur.substring(0, 2) + ":00";
    var weerinfo = "";
    if (  Array.isArray(weatherdata.daily) ) {
      const searchDate = datum + " 13:00";
      const unixDate = new Date(searchDate).getTime() / 1000 ;

  
      if ( weatherdata.daily[0].dt === unixDate ) { weerinfo = weatherdata.daily[0].weather[0].description + ", temp:" + weatherdata.daily[0].temp.day + "°, wind:" + weatherdata.daily[0].wind_speed ;}
      if ( weatherdata.daily[1].dt === unixDate ) { weerinfo = weatherdata.daily[1].weather[0].description + ", temp:" + weatherdata.daily[1].temp.day + "°, wind:" + weatherdata.daily[1].wind_speed ;}
      if ( weatherdata.daily[2].dt === unixDate ) { weerinfo = weatherdata.daily[2].weather[0].description + ", temp:" + weatherdata.daily[2].temp.day + "°, wind:" + weatherdata.daily[2].wind_speed ;}
      if ( weatherdata.daily[3].dt === unixDate ) { weerinfo = weatherdata.daily[3].weather[0].description + ", temp:" + weatherdata.daily[3].temp.day + "°, wind:" + weatherdata.daily[3].wind_speed ;}
      if ( weatherdata.daily[4].dt === unixDate ) { weerinfo = weatherdata.daily[4].weather[0].description + ", temp:" + weatherdata.daily[4].temp.day + "°, wind:" + weatherdata.daily[4].wind_speed ;}
      if ( weatherdata.daily[5].dt === unixDate ) { weerinfo = weatherdata.daily[5].weather[0].description + ", temp:" + weatherdata.daily[5].temp.day + "°, wind:" + weatherdata.daily[5].wind_speed ;}
      if ( weatherdata.daily[6].dt === unixDate ) { weerinfo = weatherdata.daily[6].weather[0].description + ", temp:" + weatherdata.daily[6].temp.day + "°, wind:" + weatherdata.daily[6].wind_speed ;}
      if ( weatherdata.daily[7].dt === unixDate ) { weerinfo = weatherdata.daily[7].weather[0].description + ", temp:" + weatherdata.daily[7].temp.day + "°, wind:" + weatherdata.daily[7].wind_speed ;}
  
      //var indexstr = weatherdata.daily.dt.indexOf(unixDate)
      //console.log ( indexstr) ;
    }
    return weerinfo ;
  }
  
  return (
   <React.Fragment>
     <Container>              
     <div class="topnav">
        <a class="active" href="/tespelen">Te spelen</a>
        <a href="/gespeeld">gespeeld</a>
     </div>     
     <h2> Ingepland </h2>
     {scheduled.map((data, key) => {      
        return ( 
        <Scheduled
          id={data.wedstrijd}
          datum={data.datum}
          tijd={data.tijd}
          speler1={data.ploeg1_speler1}
          speler2={data.ploeg1_speler2}
          speler3={data.ploeg2_speler1}
          speler4={data.ploeg2_speler2}
          ploeg1={data.ploeg1}
          ploeg2={data.ploeg2}
          terrein={data.terrein}
          weather={weatherdata.daily}
          //liked={isLiked}
          //likeCount={like}
      />  )
        })}        
<h2> Nog in te plannen</h2>
<div class="wedstrijdtabel">
            
{tespelen.map((data, key) => {
        return ( 
        <Wedstrijden
          id={data.wedstrijd}
          datum={data.datum}
          tijd={data.tijd}
          speler1={data.ploeg1_speler1}
          speler2={data.ploeg1_speler2}
          speler3={data.ploeg2_speler1}
          speler4={data.ploeg2_speler2}
          ploeg1={data.ploeg1}
          ploeg2={data.ploeg2}
          terrein={data.terrein}
          //liked={isLiked}
          //likeCount={like}
      />  )
        })}     
 </div>    

    </Container>
  </React.Fragment>
 );
}

export default WedstrijdPage ; 
