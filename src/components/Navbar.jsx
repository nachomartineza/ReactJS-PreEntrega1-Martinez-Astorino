const NavBar = () => {
    return (
        <ul class="nav">
            <li className="nav-item">
                <a className="nav-link active text-dark" aria-current="page" href="#">About F1</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark" href="#">Race Calendar</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark" href="#">Teams</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark" href="#">Drivers</a>
            </li>
        </ul>
    )
}

export default NavBar;