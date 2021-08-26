import React from "react";
import "./Card.css";

export default function Played(props) {
    return (     
      <div class="wedstrijdoverig break">  
      <div class="team-container"> {props.speler1} - {props.speler2}  </div>
      <div class="team-vs">vs</div>
      <div class="team-container"> {props.speler3} - {props.speler4}  </div>          
      <div class="profile"> {props.ploeg1} </div> - 
      <div class="profile"> {props.ploeg2} </div>
   </div>       
      )    
}