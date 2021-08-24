import React, { useState, useEffect } from "react";
import Scheduled from "../components/Scheduled.js" ;
import Wedstrijden from "../components/Wedstrijden.js"
import Played from "../components/Played.js"
import { wedstrijdData } from '../data/wedstrijdData';
import Container from "../components/container.component.js";
const axios = require('axios').default;

const WedstrijdPage = () => {
  const [weatherdata, setWeatherData ] = useState([]);
  useEffect(() => {    
    // Run! Like go get some data from an API.
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    
    // Location TC Tessenderlo
    const longitude = 5.089368256628124 ; 
    const latitude = 51.079886573545316 ;

    var url = `https://api.openweathermap.org/data/2.5/onecall?appid=${API_KEY}&lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,daily&units=metric` ;
    //var url = `https://swapi.dev/api/people`;
    console.log ( url ) ;

//    axios.get(url)
//      .then(function (response) {
//        // handle success
//        setWeatherData ( response.data );       
//        console.log ( response)
//        console.log ( "na set --->") ;
//        console.log ( weatherdata);
//        
//  } 
//      ).catch(function (error) {
//        // handle error
//        console.log(error);
//      }) ;
    
  }, []);

  //console.log ( "hier --->") ;
  //console.log ( typeof weatherdata) ;
  //
  //console.log ( "--->") ;

  const weerInfo = ( searchDate ) => {
    if ( searchDate !== null) {
      const unixDate = new Date(searchDate).getTime() / 1000 ;
      //weatherdata.map ((wdata, key) => {
        //console.log ( wdata.name) ;
      //  console.log ( wdata.temp) ;
      //  console.log ( wdata.weather.main ) ;
      //  console.log ( wdata.weather.description ) ;
      //  console.log ( wdata.weather.icon ) ;
      //});
      
      ///console.log ( weatherdata );
      //const url = 'https://api.openweathermap.org/data/2.5/find?q=Tessenderlo&units=metric&type=accurate&mode=json&APPID=4967dbc8d14d379b2b24989685793407&date=' + unixDate + '&lang=nl' ;

     // const url = 'https://api.openweathermap.org/data/2.5/forecast/daily?q=Tessenderlo&cnt=14&appid=4967dbc8d14d379b2b24989685793407&lang=nl' ;
      
     // axios.get(url)
      //.then(function (response) {
     // handle success
     //console.log(typeof response.data);
     //console.log(response.data);  } 
     //).catch(function (error) {
      // handle error
     // console.log(error);
    //})
    //.then(function () {
      // always executed
    //});
   }
    return `zeer lichte bewolking. temp": 21.34,,  "feels_like": 21.12, wind       "speed": 7.2,   "icon": "02d"` ;
  }

  var scheduled = wedstrijdData.filter(function(wedstrijd) {
    return wedstrijd.tijd !== null && wedstrijd.ploeg1 === null ;
  }) ;
  
  var tespelen = wedstrijdData.filter(function(wedstrijd) {
    return wedstrijd.tijd === null && wedstrijd.ploeg1 === null ;
  }) ;

  return (
   <React.Fragment>
     <Container>       
     <div class="topnav">
        <a class="active" href="/tespelen">Te spelen</a>
        <a href="/gespeeld">gespeeld</a>
     </div>     
     <h2> Ingepland </h2>
     {scheduled.map((data, key) => {
        weerInfo ( data.datum) ;
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
