import React, { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../services/firebase"

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)
    const { categoryId } = useParams()


    useEffect(() => {
        setLoading(true)
        const collectionProductos = categoryId
            ? query(collection(db, "productos"), where("category", "==", categoryId))
            : collection(db, "productos")
        getDocs(collectionProductos)
            .then((res) => {
                const list = res.docs.map((product) => {
                    return {
                        id: product.id,
                        ...product.data()
                    }
                })
                setProductos(list)
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))

    }, [categoryId])


    return (
        <div>
            {loading ? (<p>Cargando...</p>
            ) : (
                <div>
                    <h1>
                        {greeting}
                        {categoryId && categoryId}
                    </h1>
                    <ItemList productos={productos} />
                </div>
            )}
        </div>
    )
}
export default ItemListContainer