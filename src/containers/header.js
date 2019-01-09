import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">
                    <div>Popular Movies</div>
                </Link>
                <Link to="/favourites">
                    <div>Favourites</div>
                </Link>
            </div>
        )
    }
}

export default Header;