import { productServices } from "../services/client-service.js";

const crearNuevoProducto = (url, productName, price, id) => {
    const linea = document.createElement("tr");
    const contenido = `<div class="product__card">
    <img class="product__img" src="${url}" alt="${productName}">
    <div class="edit__buttons">
        <button class="delete__button" href="#" type="button" id="${id}"></button>
        <a class="edit__button" href="/assets/screens/editarProducto.html?id=${id}"></a>
    </div>
    <div class="product__info">
        <p class="product__name">${productName}</p>
        <p class="product__price">$ ${price}</p>
        <p class="product__id">#${id}</p>
    </div>
    </div>`;
    linea.innerHTML = contenido;
    const btn = linea.querySelector("button");
    btn.addEventListener("click", () => {
        const id = btn.id;
        productServices.eliminarProducto(id).then( (respuesta) => {
            console.log(respuesta);
        }).catch( (err) => alert("Ocurrió un error") );
    });

    return linea;
};

const table = document.querySelector("[data-table]");

productServices.listaProductos().then((data) => {
    data.forEach(({url, productName, price, id}) => {
        const nuevaLinea = crearNuevoProducto(url, productName, price, id);
        table.appendChild(nuevaLinea);
    });
}).catch((error) => alert("Ocurrió un error"));