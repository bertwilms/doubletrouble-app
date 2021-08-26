import React from "react";
import Played from "../components/Played.js"
import { wedstrijdData } from '../data/wedstrijdData';
import Container from "../components/container.component.js";
const axios = require('axios');

const GespeeldPage = () => {
  var gespeeld = wedstrijdData.filter(function(wedstrijd) {
    return wedstrijd.tijd !== null && wedstrijd.ploeg1 !== null ;
  }) ;  
  return (
   <React.Fragment>
     <Container>       
     <div class="topnav">
        <a href="/tespelen">Te spelen</a>
        <a class="active" href="/gespeeld">gespeeld</a>
     </div>          
     <h2> Reeds gespeeld </h2>
 <div class="wedstrijdtabel">
{gespeeld.map((data, key) => {
        return ( 
        <Played
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

export default GespeeldPage ; 
