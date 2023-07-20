// Leer productos

const listaProductos = () => fetch("http://localhost:3000/products").then( respuesta => respuesta.json());


// Agregar producto

const addProduct = (url, categoria, productName, price, description) => {
    return fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({url, categoria, productName, price, description, id: uuid.v4()}),
    });
};

// Eliminar producto

const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
    })
}

// Editar producto

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/products/${id}`).then( (respuesta) => respuesta.json());
};

const actualizarProducto = (url, categoria, productName, price, description, id) => {
    return fetch(`http://localhost:3000/products/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({url, categoria, productName, price, description})
    }).then( (respuesta) => respuesta).catch((err) => console.log(err));
}

// Leer admins

const listaAdmins = () => fetch("http://localhost:3000/admins").then( respuesta => respuesta.json());

// Ver más

const obtenerProductoId = async(id) => {
    const respuesta = await fetch(`http://localhost:3000/products/${id}`)
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