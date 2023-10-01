import { createContext, useState } from "react";


export const CartContext = createContext({
    cart: [],
    clearCart: () => [],
    cartQuantity: 0,
    total: 0,

})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])


    console.log(cart)


    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }])
        } else {
            console.error("El Producto ya fue agregado")
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(item => item.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some((item) => item.id === itemId)
    }

    const calculateCartQuantity = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }

    const calculateTotal = () => {
        return cart.reduce((acc, item) => acc + item.quantity * item.precio, 0)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, cartQuantity: calculateCartQuantity(), total: calculateTotal() }}>
            {children}
        </CartContext.Provider>
    )
}
