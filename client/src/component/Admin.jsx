import React, { Component } from 'react';
import axios from 'axios'
export default class Admin extends Component {

    state = {
        name: '',
        logo_url: '',
        coach: '',
        redirectToHome: false
    }

    handleChange = (evt) => {
        evt.preventDefault()
        const prevState = { ...this.state.singleTeam }
        prevState[evt.target.name] = evt.target.value
        this.setState({ singleTeam: prevState })
    }

    createNewTeam = async (evt) => {
        evt.preventDefault();
        const newTeam = {
            name: this.state.newTeam.name,
            logo_url: this.state.newTeam.logo_url,
            coach: this.state.newTeam.coach
        }
        await axios.post('/api/v1/team', newTeam)
            .then((res) => {
                console.log(res);
            }, (error) => {
                console.log(error);
            });
    }


    render() {
        return (
            <form onSubmit={this.createNewTeam} id="postComment">
                <input type="text" placeholder="name" name="name" onChange={this.handleChange} value={this.state.singleTeam.name} />
                <input type="text" placeholder="logo url" name="logo_url" onChange={this.handleChange} value={this.state.singleTeam.logo_url} />
                <input type="text" placeholder="coach" name="coach" onChange={this.handleChange} value={this.state.singleTeam.coach} />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
