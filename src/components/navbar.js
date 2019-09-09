import React from 'react';
import { Link } from 'react-router-dom'
import '../css/navbar.css';


export default class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="navbar-row">
                    <div className="navbar-item"><Link to='player-data'>PLAYER</Link></div>
                    <div className="navbar-divider"></div>
                    <div className="navbar-item" ><Link to='store-data'>STORE</Link></div>
                </div>
            </React.Fragment>
        )
    }
}