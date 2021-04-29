import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import NavBurger from './NavBurger';
import MainBar from './MainBar';

function App() {


  return (
    <Router>
      <div className="App">
        <MainBar />
        <NavBurger />
        <Switch>
          <Route exact path="/">

          </Route>
          <Route path="/about">

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
