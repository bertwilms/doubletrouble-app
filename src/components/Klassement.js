
export default function Klassement(props) {   
    console.log ( props)
    return (
       <div class="wedstrijdoverig break">            

      <div>{props.voornaam} </div>
      <div>{props.gespeeld}</div>
      <div>{props.punten}</div>
      <div>{props.games_voor}</div>
      <div>{props.games_tegen}</div>
      <div>{props.verschil} </div>

      </div>       
    );
}