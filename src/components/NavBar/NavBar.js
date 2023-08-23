import CardWidget from "../CardWidget/CardWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to="/">
            <h2>🖥Tienda DrHard</h2>
            </Link>
            <div className="Categories">
                <NavLink to={"/category/mouse"} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}>Mouses</NavLink>
                <NavLink to={"/category/teclado"} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}>Teclados</NavLink>
                <NavLink to={"/category/auricular"} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}>Auriculares</NavLink>
             </div>
            <CardWidget />
        </nav>
    )
}

export default NavBar