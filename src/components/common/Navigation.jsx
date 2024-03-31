import { Link, NavLink } from 'react-router-dom';

export default function Navigation(props) {
    const activeStyle = {
        color: '#c35007',
    };

    return (
        <nav className={`navigation ${props.className}`}>
            <ul className="navigation__list">
                <li className="navigation__item">
                    <NavLink
                        exact
                        to="/"
                        className="navigation__link"
                        activeStyle={activeStyle}
                    >
                        Home
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink
                        to="/headphones"
                        className="navigation__link"
                        activeStyle={activeStyle}
                    >
                        Headphones
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink
                        to="/speakers"
                        className="navigation__link"
                        activeStyle={activeStyle}
                    >
                        Speakers
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink
                        to="/earphones"
                        className="navigation__link"
                        activeStyle={activeStyle}
                    >
                        Earphones
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
