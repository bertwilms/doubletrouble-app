import logo from './logo.svg';
import './App.css';
import Card from "./components/Card.js" ;
import { wedstrijdData } from './data/wedstrijdData';

const wedstrijdItem = {
  id: 1,
  datum: "zondag 22 augustus",
  tijd: "9:15",
  speler1: "Bert",
  speler2: "Jo",
  speler3: "Wim",
  speler4: "Marc",
  spelervrij: "Nico",
//  image: food,
  description:
    "Bu kremsi ve baharatlı avokado sosu, günlük taco'larınızı hazırlamak için harika seçeneklerden biri. Geleneksel olarak flautas veya taquitos ile servis edilir, ancak bazı vegan enchiladalara da harika bir katkı sağlar.",
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-title"> Double Trouble          
        </p>
        <div className="card-header"> Wedstrijden </div>
        {wedstrijdData.map((data, key) => {
        return ( 
        <Card
          id={data.wedstrijd}
          datum={data.datum}
          tijd={data.tijd}
          speler1={data.ploeg1_speler1}
          speler2={data.ploeg1_speler2}
          speler3={data.ploeg2_speler1}
          speler4={data.ploeg2_speler2}
          ploeg1={data.ploeg1}
          ploeg2={data.ploeg2}
          //liked={isLiked}
          //likeCount={like}
      />  )
        })}        
        
      </header>
    </div>
  );
}

export default App;
