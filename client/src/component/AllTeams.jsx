import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class AllTeams extends Component {
    state = {
        error: '',
        allTeams: [],
        newTeamForm: true,
        newTeam: {
            name: '',
            logo_url: '',
            coach: ''
        },
    }

    componentDidMount() {
        this.getTeams()
    }

    getTeams = async () => {
        const getAllTeams = await axios.get('/api/v1/team/')
        this.setState({ allTeams: getAllTeams.data })
        console.log(this.state.allTeams)
    }

    createNewTeam = (evt) => {
        evt.preventDefault()
        axios.post('/api/v1/team/', this.state.newTeam)
            .then(() => {
                this.getTeams()
            })
            .catch(error => {
                console.log(error.response)
            })
    }

    toggleNewTeamForm = () => {
        const newTeamForm = !this.state.newTeamForm
        this.setState({ newTeamForm })
    }

    handleInputChange = (evt) => {
        const newTeam = { ...this.state.newTeam }
        newTeam[evt.target.name] = evt.target.value
        this.setState({ newTeam: newTeam })
    }

    render() {
        return (
            <div>
                {this.state.allTeams.map((team) => {
                    return (

                        <Link to={`/team/${team.id}`} key={team.id}>
                            <img src={team.logo_url} width="200" alt='logo' />
                        </Link>)

                }
                )}
                <div>
                    <button onClick={this.toggleNewTeamForm}>
                        {this.state.newTeamForm ? 'New Team' : 'Hide'}
                    </button>
                    {this.state.newTeamForm ? null : <form onSubmit={(evt) => { this.createNewTeam(evt); this.toggleNewTeamForm() }}>
                        <input
                            type="text"
                            name="name" placeholder="Name"
                            onChange={this.handleInputChange} />
                        <input
                            type="text"
                            name="logo_url" placeholder="logo"
                            onChange={this.handleInputChange} />
                        <input
                            type="text"
                            name="coach" placeholder="Coach"
                            onChange={this.handleInputChange} />
                        <input type="submit" />
                    </form>}
                </div>
            </div>
        );
    }
}

