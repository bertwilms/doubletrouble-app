import React from 'react';
import Container from "../components/container.component.js";
import { klassementData } from '../data/klassementData';
import Scheduled from "../components/Scheduled.js" ;

const KlassementPage = () => {

    return (
        <React.Fragment>
          <Container>                 
   
     <h2> Klassement</h2>
             <div>
                <table class="klassementtable">
                    <thead class="klassementtable__header">
                        <th></th>
                        <th>Speler</th>
                        <th>PTN</th>
                        <th>M</th>                        
                        <th>G+</th>
                        <th>G-</th>                        
                        <th>G+/-</th>
                    </thead>
                    <tbody class="klassement__data">
                        {klassementData.map((data, index ) => {
                            return (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{data.voornaam}</td>
                                    <td>{data.punten}</td>
                                    <td>{data.gespeeld}</td>
                                    <td>{data.games_voor}</td>
                                    <td>{data.games_tegen}</td>
                                    <td>{data.verschil}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
             
             
            

            
        
          </Container>
        </React.Fragment>
);
}

export default KlassementPage ; 
