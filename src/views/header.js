import React, {Component} from 'react'
import {Nav, NavItem,Navbar} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import '../styles/views/app.css';

class Header extends Component {
    render() {
        //TODO move navigation to navigation component
        //TODO add logo and title
        return (
            <header>
                <Navbar.Brand>
                    <span className="logo">n</span><span className="second-word">Wallet</span>
                </Navbar.Brand>
                <Nav bsStyle="pills">
                    <LinkContainer to="/" exact={true}>
                        <NavItem eventKey={1}>
                            Dashboard
                        </NavItem>
                    </LinkContainer>
                    <LinkContainer to="/expenses" exact={true}>
                        <NavItem eventKey={2}>
                            Expenses
                        </NavItem>
                    </LinkContainer>
                    <LinkContainer to="/incomes" exact={true}>
                        <NavItem eventKey={2}>
                            Incomes
                        </NavItem>
                    </LinkContainer>
                </Nav>  
                <hr/>
            </header>
        );
    }
}

export default Header;