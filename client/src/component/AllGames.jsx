import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class AllTeams extends Component {
    state = {
        allGames: []
    }

    componentDidMount() {
        this.getAllGames()
    }

    getAllGames = async () => {
        const getAllGames = await axios.get('/api/v1/game/')
        this.setState({ allGames: getAllGames.data })
        console.log(this.state.allGames)
    }

    render() {
        return (
            <div>
                <h3>Schedule</h3>
                {this.state.allGames.map((game) => {
                    return (
                        <Link to={`/games/${game.id}`}>
                            <h3>{game.opponent}</h3>
                            <h3>{game.date}</h3>
                        </Link>
                    )
                })}
            </div>
        );
    }
}

