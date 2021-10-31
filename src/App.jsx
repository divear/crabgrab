
import Home from "./components/Home";
import Game from "./components/Game";
import Fail from "./components/Fail";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
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
  );
}

export default App;