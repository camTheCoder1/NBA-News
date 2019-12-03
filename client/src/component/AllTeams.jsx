import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class AllTeams extends Component {
    state = {
        allTeams: []
    }

    componentDidMount() {
        this.refreshPage()
    }

    refreshPage = async () => {
        const getAllTeams = await axios.get('/api/v1/team')
        this.setState({ allTeams: getAllTeams.data })
        console.log(this.state.allTeams)
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
                <div>
                    <a href="/admin/"><button>Add New Team</button>
                    </a>
                </div>
            </div>
        );
    }
}

