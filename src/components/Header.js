import React from 'react';
import {NavLink} from 'react-router-dom';

class Header extends React.Component {

    render() {
        return (
            <header>
                <NavLink activeClassName='active' to="/" exact>Home</NavLink>
                <NavLink activeClassName='active' to="/pizza" exact>Pizza</NavLink>
            </header>
        )
    }
}

export default Header;