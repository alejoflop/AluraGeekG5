// Leer productos

const listaProductos = () => fetch("https://64baba895e0670a501d696fe.mockapi.io/products").then( respuesta => respuesta.json());


// Agregar producto

const addProduct = (url, categoria, productName, price, description) => {
    return fetch(`https://64baba895e0670a501d696fe.mockapi.io/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({url, categoria, productName, price, description, id: uuid.v4()}),
    });
};

// Eliminar producto

const eliminarProducto = (id) => {
    return fetch(`https://64baba895e0670a501d696fe.mockapi.io/products/${id}`, {
        method: "DELETE",
    })
}

// Editar producto

const detalleProducto = (id) => {
    return fetch(`https://64baba895e0670a501d696fe.mockapi.io/products/${id}`).then( (respuesta) => respuesta.json());
};

const actualizarProducto = (url, categoria, productName, price, description, id) => {
    return fetch(`https://64baba895e0670a501d696fe.mockapi.io/products/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({url, categoria, productName, price, description})
    }).then( (respuesta) => respuesta).catch((err) => console.log(err));
}

// Leer admins

const listaAdmins = () => fetch("https://64baba895e0670a501d696fe.mockapi.io/admins").then( respuesta => respuesta.json());

// Ver más

const obtenerProductoId = async(id) => {
    const respuesta = await fetch(`https://64baba895e0670a501d696fe.mockapi.io/products/${id}`)
    return await respuesta.json()
}


export const productServices = {
    listaProductos,
    addProduct,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
    listaAdmins,
    obtenerProductoId,
}