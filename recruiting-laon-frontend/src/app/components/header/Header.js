import { Link } from "react-router-dom";
import styles from './Header.module.css';


function Header({links}) {
    return (
        <header className={styles.header}>
            <nav>
                <ul>
                    {links.map((links, index) => (
                        <li key={index} className="semibold16">
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