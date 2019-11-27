import React, { Component } from 'react';
import axios from 'axios';

class SingleTeam extends Component {

    state = {
        team: {},
        games: [],
        news: []
    }

    componentDidMount() {
        const teamId = this.props.match.params.id;
        this.fetchArtist(teamId)
    }

    fetchArtist = async (teamId) => {
        try {
            const teamResponse = await axios.get(`/api/v1/teams/${teamId}`)
            this.setState({
                team: teamResponse.data,
                games: teamResponse.data.games,
                news: teamResponse.data.news,
            })
        }
        catch (error) {
            console.log(error)
            this.setState({ error: error.message })
        }
    }

    render() {
        return (
            <div>
                <img src={this.state.team.logo_url} alt="" />
                <h1>{this.state.team.name}</h1>
                {this.state.games.map(game => (
                    <div key={game.id}>
                        <h4>{game.opponent}</h4>
                    </div>
                ))}
            </div>
        );
    }
}

export default SingleTeam;