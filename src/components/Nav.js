import Account from './Account';
import navClasses from './../styles/Nav.module.css';
import logo from './../asset/image/logo-bg.png';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className={navClasses.nav}>
            <ul>
                <li>
                    <Link to="/" className={navClasses.brand}>
                        <img src={logo} alt="Learn with Sumit Logo" />
                        <h3>Learn with Sumit</h3>
                    </Link>
                </li>
            </ul>
            <Account/>
        </nav>
    )
}

export default Nav;