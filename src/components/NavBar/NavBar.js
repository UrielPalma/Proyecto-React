import CardWidget from "../CardWidget/CardWidget"
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <h2>🖥Tienda DrHard</h2>
            <div className="Categories">
                <NavLink to={"/"}>Todos Los Productos</NavLink>
                <NavLink to={"/category/mouse"} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}>Mouses</NavLink>
                <NavLink to={"/category/teclado"} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}>Teclados</NavLink>
                <NavLink to={"/category/auricular"} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}>Auriculares</NavLink>
            </div>
            <div>
            <NavLink to='/cart'><CardWidget /><p></p></NavLink>
            </div>
        </nav>
    )
}

export default NavBar