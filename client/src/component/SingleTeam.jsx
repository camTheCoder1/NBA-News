import React, { Component } from 'react'
import axios from 'axios'
export default class SingleTeam extends Component {
    state = {
        name: '',
        logo_url: '',
        coach: '',
        games: [],
        news: []
    }

    componentDidMount() {
        //get data for single team when component mounts
        const teamId = this.props.match.params.teamId
        axios.get(`/api/v1/team/${teamId}`)
            .then((res) => {
                console.log(res.data)
                this.setState(res.data)
            })
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <p>{this.state.logo_url}</p>
                <p>{this.state.coach}</p>
                <img src={this.state.logo_url} width="350" alt='logo' />
            </div>
        )
    }

}
