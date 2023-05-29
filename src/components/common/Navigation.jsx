export default function Navigation(props) {
    return (
        <nav className={`navigation ${props.className}`}>
            <ul className="navigation__list">
                <li className="navigation__item">
                    <a href="#" className="navigation__link">
                        Home
                    </a>
                </li>
                <li className="navigation__item">
                    <a href="#" className="navigation__link">
                        Headphones
                    </a>
                </li>
                <li className="navigation__item">
                    <a href="#" className="navigation__link">
                        Speakers
                    </a>
                </li>
                <li className="navigation__item">
                    <a href="#" className="navigation__link">
                        Earphones
                    </a>
                </li>
            </ul>
        </nav>
    );
}
