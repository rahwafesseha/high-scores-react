
import allCountryScores from './scores';
import PlayerScores from "./playerScores";
import './App.css';

function App(){
  return (
  
    <PlayerScores scores={allCountryScores}/>)
}

export default App;
