import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

class SingleTeam extends Component {

    state = {
        name: '',
        logo_url: '',
        coach: '',
        games: [],
        news: []
    }

    componentDidMount = async () => {
        const allTeams = await axios.get(`/api/v1/team/${this.props.match.params.teamId}`)
        this.setState(allTeams.data)
        console.log(allTeams.data)
    }

    render() {
        return (
            <div className="flex-container">
                <div>
                    <h1>{this.state.name}</h1>
                    <img src={this.state.logo_url} alt="logo" width="200" />
                </div>
                <br></br>
                <div>
                    <h2> Upcoming Games </h2>
                    {this.state.games.map((game) => {
                        return (
                            <div key={game.id}>
                                <Link to={`/games/${game.id}`}>{game.opponent}</Link>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <h2> News </h2>
                    {this.state.news.map((article) => {
                        return (
                            <div key={article.id}>
                                <a href={article.article_url}>{article.title}</a>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default SingleTeam;