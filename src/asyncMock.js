const products = [
    {
        id: "1",
        nombre: "Teclado T-Dagger Bora",
        precio: 13300,
        img: "../assets/img/tecladoTdager.jpg",
        category: "teclado",
        stock: 20,
        descripcion: "Teclado Mecanico"
    },
    {
        id: "2",
        nombre: "Teclado Redragon Kumara K552",
        precio: 24300,
        img: "./assets/img/kumaraK552.jpg",
        category: "teclado",
        stock: 22,
        descripcion: "Teclado Mecanico"

    },
    {
        id: "3",
        nombre: "Teclado Logitech Prodigy G213",
        precio: 20000,
        img: "./assets/img/prodigy213.jpg",
        category: "teclado",
        stock: 12,
        descripcion: "Teclado de Membrana"
    },
    {
        id: "4",
        nombre: "Mouse Glorius Model 0 minus",
        precio: 17300,
        img: "./assets/img/gloriusOmodel.jpg",
        category: "mouse",
        stock: 30,
        descripcion: "Mouse Gamer"

    },
    {
        id: "5",
        nombre: "Mouse Logitech G203",
        precio: 14000,
        img: "./assets/img/logiG203.jpg",
        category: "mouse",
        stock: 55,
        descripcion: "Mouse para videojuegos"

    },
    {
        id: "6",
        nombre: "Mouse Logitech G502",
        precio: 24500,
        img: "./assets/img/logiG502.jpg",
        category: "mouse",
        stock: 8,
        descripcion: "Mouse Gamer con alto rendimiento para niveles competitivos"

    },
    {
        id: "7",
        nombre: "Auriculares Redragon Zeuz H510",
        precio: 28000,
        img: "./assets/img/zeuzH510.jpg",
        category: "auricular",
        stock: 25,
        descripcion: "Auriculares Gamer para videojuegos"

    },
    {
        id: "8",
        nombre: "Auriculares HyperX Cloud Stinger",
        precio: 22000,
        img: "./assets/img/cloudStinger.jpg",
        category: "auricular",
        stock: 18,
        descripcion: "Auriculares Gamer"

    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        })
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === categoryId))
        })
    })
}

