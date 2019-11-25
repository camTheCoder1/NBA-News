import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import AllTeams from './component/AllTeams';
import SingleTeam from './component/SingleTeam';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="header">

          <div>
            <h1>ESPN</h1>
          </div>
        </div>

        <Switch>
          <Route exact path="/" component={AllTeams} />
          <Route exact path="/team/:teamId" component={SingleTeam} />
        </Switch>
      </Router>
    );
  }
}

export default App;
