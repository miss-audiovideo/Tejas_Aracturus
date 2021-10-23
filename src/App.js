// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CompOne from "./Components/CompOne";
import CompTwo from "./Components/CompTwo";
import CompThree from "./Components/CompThree";
import NavBar from "./Components/NavBar";
import Products from "./Components/Products";
import Trendius from "./Components/Trendius";
import Career from "./Components/Career";
import Acoustics from "./Engineering/Acoustics";
import Balancing from "./Plantmore/Balancing";

function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* <Route exact path="/" component={App} /> */}
          <Route exact path="/">
            <NavBar />
            <CompOne />
            <CompTwo />
            <CompThree />
          </Route>
          <Route exact path="/products">
            <NavBar />

            <Products />
          </Route>
          <Route exact path="/trendius">
            <NavBar />

            <Trendius />
          </Route>
          <Route exact path="/company/career">
            <NavBar />
            <Career />
          </Route>
          <Route exact path="/Engineering_Acoustics">
            <Acoustics />
          </Route>
          <Route exact path="/Plantmore_Balancing">
            <Balancing />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
