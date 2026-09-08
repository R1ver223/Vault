import "./Navbar.css";

function Header() {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <a href="#Settings">
                        {/* Replace with your gear icon or image */}
                        <img src="/path-to-gear-icon.png" alt="Gear" className="nav-icon" />
                    </a>
                </li>
                <li className="nav-item logo-item">
                    <a href="#Home">
                        <h1 className="logo-text">Vault</h1>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#Profile">
                        {/* Replace with your profile icon/square */}
                        <div className="profile-square"></div>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Header;