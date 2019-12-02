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
            <div>
                <h1>{this.state.name}</h1>
                <img src={this.state.logo_url} alt="logo" width="350" />
                <div><Link to={`/games/`}>Games</Link>
                </div>
                {this.state.games.map((game) => {
                    return (
                        <div key={game.id}>
                            <h3>{game.opponent}</h3>
                            <h3>{game.date}</h3>
                            <h3>{game.location}</h3>
                        </div>
                    )
                })}

                {this.state.news.map((article) => {
                    return (
                        <div key={article.id}>
                            <h2>News</h2>
                            <h3>{article.title}</h3>
                            <h3>{article.article_url}</h3>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default SingleTeam;