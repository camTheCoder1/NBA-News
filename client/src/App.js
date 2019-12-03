import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllTeams from './component/AllTeams';
import SingleTeam from './component/SingleTeam';
import AllGames from './component/AllGames';
import SingleGame from './component/SingleGame';
import News from './component/News';
import Admin from './component/Admin';
import Navbar from './component/Navbar'
import './App.css';

class App extends Component {
  render() {

    return (
      <Router>
        <div className="topNav">
          <Navbar />
        </div>

        <Switch>
          <Route exact path="/" component={AllTeams} />
          <Route exact path="/team/:teamId" component={SingleTeam} />
          <Route exact path="/games" component={AllGames} />
          <Route exact path="/games/:gameId" component={SingleGame} />
          <Route exact path="/news" component={News} />
          <Route exact path="/admin" component={Admin} />
        </Switch>

      </Router>
    );
  }
}

export default App;
