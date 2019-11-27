import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class AllTeams extends Component {

    state = {
        error: '',
        allTeams: []
    }
    componentDidMount() {
        this.fetchTeams();
    }

    fetchTeams = async () => {
        try {
            const res = await axios.get('/api/v1/teams');
            this.setState({ teams: res.data });
        }
        catch (err) {
            console.log(err)
            this.setState({ error: err.message })
        }
    }

    render() {
        if (this.state.error) {
            return <div>{this.state.error}</div>
        }
        return (
            <div>
                <h1>All Teams</h1>
                {this.state.teams && this.state.teams.map(team => (
                    <div key={team.id}>
                        <Link to={`/team/${team.id}`} >{team.name}</Link>
                    </div>
                ))}
            </div>
        );
    }
}
