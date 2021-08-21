import React from "react";

export default function Wedstrijden(props) {
    return (
        <div class="teamscolumn">
            <div className="profile">
            <span>{props.id}</span>
            </div>
            
            <div class="team-container">
                <div class="team-details">
                  <div>{props.speler1}</div>
                  <div>{props.speler2}</div>                  
                </div>
              </div>
              <div class=".team-vs">vs</div>
              <div class="team-container">
                <div class="team-details">
                  <div>{props.speler3}</div>
                  <div>{props.speler4}</div>                  
                </div>
              </div>                                  
            </div>            
    );
}