import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Logo from '../../assets/img/logo.png';
import './../../App.scss'

const links = {
    speakers: 'Speakers',
    events: 'Events',
}

const Header = () => {
    return (
        <header className="HeaderMain">
            <div className="HeaderMain__Inner">
                <Link to="/" className="LogoContainer">
                    <img className="LogoContainer__Img" src={Logo} alt="logo"/>
                </Link>
                <nav className="HeaderMain__Nav">
                    <ul className="HeaderMain__NavList">
                        <li className="HeaderMain__NavListItem">
                            <Link className="HeaderMain__NavLink"
                                to="/speakers">{links.speakers}
                            </Link>
                        </li>
                        <li className="HeaderMain__NavListItem">
                            <Link className="HeaderMain__NavLink"
                                to="/events">{links.events}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
} 

export default Header;