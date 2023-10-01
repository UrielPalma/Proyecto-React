import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, cartQuantity, total} = useContext(CartContext)

    if(cartQuantity === 0) {
        return (
            <div>
                <h1>No Hay Items en el Carrito 😥</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }

    return (
        <div>
            { cart.map(item => <CartItem key={item.id} item={item}/>)}
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className='Button'>Limpiar Carrito</button>
            <Link to='/checkout' className='Option'>Checkout</Link>
        </div>
    )
}

export default Cart
