import "./ItemDetail.css"
import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"

const ItemDetail = ({ id, nombre, img, category, descripcion, precio, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)
    
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, nombre, precio
        }

        addItem(item, quantity)
    };

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {descripcion}
                </p>
                <p className="Info">
                    Precio: ${precio}
                </p>
            </section>
            <footer className="ItemFooter">
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className="Option">Finalizar Compra</Link>
                    ) : (

                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )
                }
            </footer>

        </article>
    )
}

export default ItemDetail