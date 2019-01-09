import React from 'react';
import PropTypes from 'prop-types';
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

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="sm">
                    <NavbarBrand>
                        <NavLink>
                            <Link to="/">
                                <div>The App</div>
                            </Link>
                        </NavLink>
                    </NavbarBrand>
                    <SearchDb/>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink>
                                    <Link to="/favourites">
                                        <div>Favourites</div>
                                    </Link>
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