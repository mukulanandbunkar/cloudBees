import "./App.scss";
import LadingPage from "./LandingPage/LandingPage";
import cloudBees from '../src/assets/cloudbees.png'

function App() {
  return (
    <div  className="App">
      <img className="App__img" src={cloudBees}/>
      <LadingPage />
    </div>
  );
}

export default App;
