import { Link, NavLink } from 'react-router-dom';

export default function Navigation(props) {
    return (
        <nav className={`navigation ${props.className}`}>
            <ul className="navigation__list">
                <li className="navigation__item">
                    <NavLink
                        exact
                        to="/"
                        className="navigation__link"
                        activeStyle={{
                            color: '#d87d4a',
                        }}
                    >
                        Home
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink
                        to="/headphones"
                        className="navigation__link"
                        activeStyle={{
                            color: '#d87d4a',
                        }}
                    >
                        Headphones
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink
                        to="/speakers"
                        className="navigation__link"
                        activeStyle={{
                            color: '#d87d4a',
                        }}
                    >
                        Speakers
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink
                        to="/earphones"
                        className="navigation__link"
                        activeStyle={{
                            color: '#d87d4a',
                        }}
                    >
                        Earphones
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
