import { NavLink } from "react-router-dom";

function Nav() {

    return (
        <div className="container">
            <div className="bin">
                <nav>
                    <NavLink to="/" end className={ ({isActive}) => isActive ? 'active' : null}>Home</NavLink>
                    <NavLink to="/things" className={ ({isActive}) => isActive ? 'active' : null}>Things</NavLink>
                    <NavLink to="/owners" className={ ({isActive}) => isActive ? 'active' : null}>Owners</NavLink>
                    <NavLink to="/drinks" className={ ({isActive}) => isActive ? 'active' : null}>Drinks</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Nav;