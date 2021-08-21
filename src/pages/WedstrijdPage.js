import React from "react";
import Scheduled from "../components/Scheduled.js" ;
import Wedstrijden from "../components/Wedstrijden.js"
import Played from "../components/Played.js"
import { wedstrijdData } from '../data/wedstrijdData';
import Container from "../components/container.component.js";

const WedstrijdPage = () => {
  var scheduled = wedstrijdData.filter(function(wedstrijd) {
    return wedstrijd.tijd !== null && wedstrijd.ploeg1 === null ;
  }) ;

  var tespelen = wedstrijdData.filter(function(wedstrijd) {
    return wedstrijd.tijd === null && wedstrijd.ploeg1 === null ;
  }) ;

  var gespeeld = wedstrijdData.filter(function(wedstrijd) {
    return wedstrijd.tijd !== null && wedstrijd.ploeg1 !== null ;
  }) ;  

  return (
   <React.Fragment>
     <Container>       

     <ul class="hyperlink" >
       <li><a href="/">Wedstrijden</a></li>
       <li><a href="/klassement">Klassement</a></li>         
     </ul>     

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
          //liked={isLiked}
          //likeCount={like}
      />  )
        })}        
<span> Overige wedstrijden </span>
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

 <span> gespeelde wedstrijden </span> 
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

export default WedstrijdPage ; 
