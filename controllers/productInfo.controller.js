import { productServices } from "../services/client-service.js";

const productoSelect = (data) => {
    const {url, productName, price, description} = data
    const producto = document.querySelector('[data-producto]')
    const cardContent = `
    <img src="${url}" alt="Foto producto ${productName}">
    <div class="info__product__div">
        <p class="info__product__name">${productName}</p>
        <p class="info__product__price">$ ${price}</p>
        <p class="info__product__description">${description}</p>
    </div>
    `
    producto.innerHTML = cardContent

    return producto
};

const cuerpoHtmlProducto = document.querySelector('[data-producto]')

const cargarProductoId = async() => {
    const url = new URL(window.location)
    const id = url.searchParams.get('id')
    const categoria = url.searchParams.get('categoria')

    const data = await productServices.obtenerProductoId(id);

    const producto = productoSelect(data)
    cuerpoHtmlProducto.appendChild(producto)
    
}
cargarProductoId()