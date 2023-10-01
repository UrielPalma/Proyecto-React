import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState ({})
    const [loader, setLoader] = useState (false)
    const { id } = useParams()



useEffect(()=>{
    setLoader(true)
    const collectionProd = collection(db, "productos")
    const referenciaAlDoc = doc(collectionProd, id)
    getDoc(referenciaAlDoc)
    .then((res) => {
        if (res.exists()) {
            setProducto({ id: res.id, ...res.data()});
        } else {
            console.error("El Documento no existe")
        }
    })

    .catch((error)=>console.log(error))
    .finally(()=>setLoader(false))
},[id])

return(
    loader ? <p>Cargando</p>
    : <div className="ItemDetailContainer">
        <ItemDetail {...producto} />
    </div>
)
}

export default ItemDetailContainer