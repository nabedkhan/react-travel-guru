import React, { useContext } from 'react';
import { FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../Logo.png';
import { userSignOut } from '../Login/firebase';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleSignOut = () => {
        userSignOut().then(data => {
            setLoggedInUser(data);
        })
    }

    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Navbar expand="lg">
                            <Link to="/">
                                <img src={logo} alt="" className="img-fluid" />
                            </Link>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <FormControl type="text" placeholder="Search your Destination" />
                                <Nav>
                                    <Link className="nav-link" to="">News</Link>
                                    <Link className="nav-link" to="">Destination</Link>
                                    <Link className="nav-link" to="">Blog</Link>
                                    <Link className="nav-link" to="">Contact</Link>
                                    {
                                        loggedInUser.email ?
                                            <Link className="nav-link" onClick={handleSignOut} to="">Log Out</Link> : <Link className="nav-link" to="/login">Login</Link>
                                    }
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;