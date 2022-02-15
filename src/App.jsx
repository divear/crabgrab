
import Home from "./components/Home";
import Game from "./components/Game";
import Fail from "./components/Fail";
import crab from "./components/imgs/crab.png"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <div className="homeDiv">
      <a className="homeButton" href="/"><h1><img className="crab" src={crab} alt="🦀" /> Crab grab</h1></a>
    </div>
    <Router>
      <Switch>
        <Route path="/game">
          <Game/>
        </Route>
        <Route path="/fail">
          <Fail/>
        </Route>
        <Route path="/" exact>
          <Home></Home>
        </Route>
      </Switch>
    </Router>
    <h1>Lukáš Odehnal 2021-2022</h1>
    </>
  );
}

export default App;
