import { Link } from "react-router-dom";
import './Header.css';


function Header({links}) {
    return (
        <header className="header">
            <nav>
                <ul>
                    {links.map((links, index) => (
                        <li key={index} className={`semibold16 ${`header-link-${index}`}`}>
                            <Link to={links.href}>
                                {links.content}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;