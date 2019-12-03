import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {

    constructor() {
        super()

    }


    render() {
        return (
            <nav className="navbar-is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/"> NBA
                  </Link>

                </div>
                <div className="navbar-start">
                    <Link to="/games" className="navbar-item">Games</Link>
                </div>
                <div>
                    <Link to="/news" className="navbar-item">News</Link>
                </div>
            </nav>
        )
    }

}
export default Navbar;