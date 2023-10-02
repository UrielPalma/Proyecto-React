import React, {useContext} from "react";
import { CartContext } from "../../Context/CartContext";


const CartItem = ({item}) => {
const {removeItem}= useContext(CartContext)
    return(

        <div className="Container">
            <img src={item.img} alt={item.nombre}/>
            <p>{item.nombre}</p>
            <p>${item.precio}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Sub total : ${item.quantity * item.precio}</p>
            <button className="btn btn-danger" onClick={()=>removeItem(item.id)}>X</button>
            </div>
    )
}

export default CartItem