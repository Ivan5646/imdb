import React from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import SearchDb from './searchDb';
import history from  '../history'

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.displaySearchBar = this.displaySearchBar.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    displaySearchBar() {
            return (
                <SearchDb />
            )
    }

    render() {
        return (
            <div>
                <Navbar light expand="sm" className={"header"}>
                    <NavbarBrand className="header__link" onClick={() => {history.push("/")}}>
                        The App
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        {this.displaySearchBar()}
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className={"header__link"} onClick={() => {history.push("/favourites")}}>
                                    Favourites
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

// Navbar.propTypes = {
//     light: PropTypes.bool,
//     dark: PropTypes.bool,
//     fixed: PropTypes.string,
//     color: PropTypes.string,
//     role: PropTypes.string,
//     expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
//     tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
//     // pass in custom element to use
// }

export default Header;