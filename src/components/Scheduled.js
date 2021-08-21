import React from "react";
import "./Card.css";


export default function Scheduled(props) {
return (
  <div class="wedstrijdtabel">
    <div class="wedstrijdtabelheader">
      <div class="wedstrijdtabeldata">
        <span><img src="https://www.worldpadeltour.com/media/images/tor-clock.svg" alt="clock"/></span>
        <span> {props.datum} {props.tijd} </span>
      </div>
      <div class="wedstrijdtabeldata">
        <span> Hier komt weer info </span>
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
        <div class=".team-vs">vs</div>
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


    
  </div>
  );
}