import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default class SingleGame extends Component {

    state = {
        opponent: '',
        date: '',
        location: '',
    }

    componentDidMount = async () => {
        const allGames = await axios.get(`/api/v1/games/${this.props.match.params.gameId}`)
        this.setState(allGames.data)
        console.loglog(allGames.data)
    }

    render() {
        return (
            <div>
                <h1>{this.state.opponent}</h1>
            </div>
        )
    }
}
