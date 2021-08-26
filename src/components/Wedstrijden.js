import React from "react";

export default function Wedstrijden(props) {   
    return (
       <div class="wedstrijdoverig break">  
          <div class="profile"> {props.id} </div>
          <div class="team-container"> {props.speler1} - {props.speler2}  </div>
          <div class="team-vs">vs</div>
          <div class="team-container"> {props.speler3} - {props.speler4}  </div>          
       </div>       
    );
}