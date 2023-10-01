import Cart from "./assets/Cart.svg"
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"

const CardWidget = () => {
    const { cartQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' className='CartWidget' style={{ display: cartQuantity > 0 ? 'block' : 'none' }}>
            <img className="CartImg" src={Cart} alt="cart-widget" />
            {cartQuantity}
        </Link>
    )

}

export default CardWidget