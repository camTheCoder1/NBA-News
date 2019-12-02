import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllTeams from './component/AllTeams';
import SingleTeam from './component/SingleTeam';
import AllGames from './component/AllGames';
import './App.css';

class App extends Component {
  render() {

    return (
      <Router>
        <div className="App">
          <div>
            <h1>ESPN</h1>
          </div>

          <Switch>
            <Route exact path="/" component={AllTeams} />
            <Route exact path="/team/:teamId" component={SingleTeam} />
            <Route exact path="/games" component={AllGames} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
