import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink className="nav-link text-dark" activeclassname="text-danger" aria-current="page" to={"/destacados"}>About F1</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" activeclassname="text-danger" to={"/category/Race Calendar"}>Race Calendar</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" activeclassname="text-danger" to={"/category/Teams"}>Teams</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" activeclassname="text-danger" to={"/category/Drivers"}>Drivers</NavLink>
            </li>
        </ul>
                
        
            
            
                
            
    )
}

export default NavBar;