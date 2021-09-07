import Account from './Account';
import navClasses from './../styles/Nav.module.css';
import logo from './../asset/image/logo-bg.png';

function Nav() {
    return (
        <nav className={navClasses.nav}>
            <ul>
                <li>
                    <a href="index.html" className={navClasses.brand}>
                        <img src={logo} alt="Learn with Sumit Logo" />
                        <h3>Learn with Sumit</h3>
                    </a>
                </li>
            </ul>
            <Account/>
        </nav>
    )
}

export default Nav;