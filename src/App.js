import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CalendarContainer from "./components/Calendar/CalendarContainer";
import SpiralMatrixContainer from "./components/SpiralMatrix/SpiralMatrixContainer";
import BracketsValidator from "./components/BracketsValidator/BracketsValidator";
import Arrays from "./components/Arrays/Arrays";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      date: "05.03.2020"
    };
  }

  refreshDate = newDate => {
    this.setState({ date: newDate });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/calendar" render={() => <CalendarContainer/>} />
            <Route path="/spiralMatrix" render={() => <SpiralMatrixContainer/>} />
            <Route path="/brackets_validator" render={() => <BracketsValidator/>} />
            <Route path="/summ_arrays" render={() => <Arrays/>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
