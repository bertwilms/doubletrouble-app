import React from "react";
import "./Card.css";
import Container from "./container.component";

export default function Scheduled(props) {
  
  const speeldatum = ( searchDate ) => {
    var days = ['Zondag','Maandag','Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag'];
    var months = ['Januari','Februari','Maart','April','Mei','Juni','Juli','Augustus','September','Oktober','November','December'];

    var datum = days[new Date ( searchDate ).getDay() ]
              + " " 
              + new Date ( searchDate ).getDate() 
              + " " 
              + months[new Date ( searchDate ).getMonth() ] ;              

    return datum ;
  }    

  
  const showWeaterData = () => {
    const searchDate = props.datum + " 13:00";
    const unixDate = new Date(searchDate).getTime() / 1000 ;

    if (  Array.isArray( props.weather) ) {
      var dagweer = props.weather.filter ( (dag) => dag.dt === unixDate) ;

      if (  dagweer.length > 0 ) {
        let degrees = dagweer[0].wind_deg;
        const directions = ["N", "NO", "O", "ZO", "Z", "ZW", "W", "NW"];

        // Split into the 8 directions
        degrees = (degrees * 8) / 360;

        // round to nearest integer.
        degrees = Math.round(degrees, 0);

        // Ensure it's within 0-7
        degrees = (degrees + 8) % 8;
        const imgurl = "http://openweathermap.org/img/wn/"+ dagweer[0].weather[0].icon + "@2x.png" ;   
        
        return <div class="message-container">
               <div><img src={imgurl} width="25px"/>{dagweer[0].weather[0].description}, {Math.round(dagweer[0].temp.day)} °C, voelt als {Math.round(dagweer[0].feels_like.day)}°C, Luchtvochtigheid {dagweer[0].humidity}%, wind {Math.round(dagweer[0].wind_speed)} km/u vanuit {directions[degrees]}
               </div>
               </div> ;               
      } else { 
        return ( `Nog geen weersvoorspelling beschikbaar voor deze dag`)
     }
    
  } }

return (
  <div class="wedstrijdtabel">
    <div class="wedstrijdtabelheader">
      <div class="wedstrijdtabeldata">
        <span><img src="https://www.worldpadeltour.com/media/images/tor-clock.svg" alt="clock"/></span>
        <span> {props.tijd} </span>
      </div>
      <div class="wedstrijdtabeldata">
        <span> {speeldatum(props.datum)} </span>
      </div>
      <div class="wedstrijdtabeldata">
        <span> Terrein</span>
        <span> {props.terrein} </span>
      </div>
      </div>      
      <div class="wedstrijdteams break">
        <div class="teamscolumn">
          <ul class="team u-list-clean">
            <li class="team-item">
              <div class="team-container">
                <div class="team-details">
                  <div>{props.speler1}</div>
                  <div>{props.speler2}</div>                  
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="team-vs">vs</div>
        <div class="teamscolumn">
          <ul class="team u-list-clean">
            <li class="team-item">
              <div class="team-container">
                <div class="team-details">
                  <div>
                  <div>{props.speler3}</div>
                  <div>{props.speler4}</div>
                  </div>
                </div>
              </div>
            </li>
          </ul>

        </div>
      </div>
      <div> {showWeaterData()} 
      </div>
    
  </div>
  );
}