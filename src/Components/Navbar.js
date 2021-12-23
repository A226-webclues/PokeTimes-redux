import React from 'react'
import { Link, withRouter } from 'react-router-dom';

const Navbar = () => {
// setTimeout(() => {
//     props.history.push('./About')
// }, 2000)
    return (
        <>
            <nav className="nav-wrapper red darken-3">
                <div className="container">
                    <a href="" className="brand-logo"> Poke'Times</a>
                    <ul className="right">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default withRouter(Navbar);
