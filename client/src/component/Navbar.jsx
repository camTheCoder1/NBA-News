import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <Link to='/' className="header">
                <h1>NBA Favorites</h1>
            </Link>
        )
    }
}

export default Navbar;