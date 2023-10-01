import { CartContext } from "../../Context/CartContext"
import { useContext, useState } from "react"
import { Timestamp, writeBatch, collection, getDocs, query, where, addDoc } from "firebase/firestore"
import { db } from "../../services/firebase"
import CheckoutForm from "../CheckoutForm/CheckoutForm"



const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)

        try {
            if (cart.length === 0) {
                console.error("El Carrito está vacío. No se puede realizar la orden")
                return;
            }
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(item => item.id)

            const productsRef = collection(db, 'productos')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where("id", 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(item => item.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error('hay productos que no cuentan con stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <h1>Se esta generando su orden....</h1>
    }

    if (orderId) {
        return <h1>El ID de su orden es: {orderId}</h1>
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )
}

export default Checkout