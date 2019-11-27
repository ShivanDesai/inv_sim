import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';

import firebase from 'firebase';

export default class CustomNavBar extends Component {
    state={
        isLoggedIn: false
    }

    componentWillMount = () => {
        firebase.auth().onAuthStateChanged(user=>{
            this.setState({isLoggedIn: !!user});
        });
    }

    render(){

        var action;
        if(this.state.isLoggedIn){
            action = <NavLink to="/logout">Logout</NavLink>;
        }
        else{
            action = <NavLink to="/login">Login</NavLink>;
        }

        return(
            <Navbar bg="dark" variant="dark" expand="lg" default collapseOnSelect>
                    <Navbar.Brand>
                        <Link to="/">Invoice Simplifier</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav pullRight>
                        <Nav.Item>
                        <Nav.Link>
                            <NavLink to="/">Home</NavLink>
                        </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link>
                            {action}
                        </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link>
                            <NavLink to="/userPage">User Page</NavLink>
                        </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}


