import { NavLink } from 'react-router-dom';

export default function Navigation(props) {
    return (
        <nav className={`navigation ${props.className}`}>
            <ul className="navigation__list">
                <li className="navigation__item">
                    <NavLink exact to="/" className="navigation__link">
                        Home
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink to="/headphones" className="navigation__link">
                        Headphones
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink to="/speakers" className="navigation__link">
                        Speakers
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink to="/earphones" className="navigation__link">
                        Earphones
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
