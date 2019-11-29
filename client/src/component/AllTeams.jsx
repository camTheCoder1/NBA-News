import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class AllTeams extends Component {
    state = {
        allTeams: []
    }

    componentDidMount() {
        axios.get('/api/v1/team')
            .then((res) => {
                const allTeams = res.data;
                this.setState({ allTeams: allTeams })
            })
    }

    render() {
        return (
            <div>
                {this.state.allTeams.map((team) => {
                    return (
                        <Link to={`/team/${team.id}`}>
                            <img src={team.logo_url} width="200" />
                        </Link>)
                }
                )}
            </div>
        );
    }
}

