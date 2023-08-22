import "./ItemList.css"
import React from "react"
import Item from "../Item/Item"
//import { getProducts } from "../../asyncMock"


const ItemList = ({products}) => {
    return(
        <div className="ItemList">
            {products.map((prod) => (
                <Item key={prod.id} {...prod} />
            ))}
        </div>
    )
}


export default ItemList