import CardWidget from "../CardWidget/CardWidget"

const NavBar = () => {
    return (
        <nav>
            <h2>🖥Tienda DrHard</h2>
            <div>
                <button>Todos Los Productos</button>
                <button>Mouses</button>
                <button>Teclados</button>
                <button>Auriculares</button>
            </div>
            <CardWidget />
        </nav>
    )
}

export default NavBar