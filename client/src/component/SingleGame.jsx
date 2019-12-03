import React, { Component } from 'react'
import axios from 'axios';

export default class SingleGame extends Component {

    state = {
        opponent: '',
        date: '',
        location: '',
        games: []
    }

    componentDidMount = async () => {
        const allGames = await axios.get(`/api/v1/game/${this.props.match.params.gameId}`)
        this.setState(allGames.data)
        console.log(allGames.data)
    }

    render() {
        return (
            <div>
                <h3>Opponent: {this.state.opponent}</h3>
                <h3>Date: {this.state.date}</h3>
                <h3>Location: {this.state.location}</h3>
            </div>
        )
    }
}
