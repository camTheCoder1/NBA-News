import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AllTeams from './component/AllTeams';
import SingleTeam from './component/SingleTeam';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <div>
            <h1>ESPN</h1>
            <div>
              <div><Link to="/">All Teams</Link></div>
            </div>
          </div>

          <Switch>
            <Route exact path="/" component={AllTeams} />
            <Route exact path="/teams/:teamId" component={SingleTeam} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
