import { productServices } from "../services/client-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
    const urlId = new URL(window.location);
    const id = urlId.searchParams.get("id");

    const url = document.querySelector("[data-url]");
    const categoria = document.querySelector("[data-categoria]");
    const productName = document.querySelector("[data-productName]");
    const price = document.querySelector("[data-price]");
    const description = document.querySelector("[data-description]");

    try {
        const product = await productServices.detalleProducto(id);
        if(product.url) {
            url.value = product.url;
            categoria.value = product.categoria;
            productName.value = product.productName;
            price.value = product.price;
            description.value = product.description;
        } else {
            throw new Error();
        }

    } catch(error){
        alert("Hubo un error")
    }

};

obtenerInformacion();

formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    const urlId = new URL(window.location);
    const id = urlId.searchParams.get("id");

    const url = document.querySelector("[data-url]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const productName = document.querySelector("[data-productName]").value;
    const price = document.querySelector("[data-price]").value;
    const description = document.querySelector("[data-description]").value;

    try {
        const actualizar = await productServices.actualizarProducto(url, categoria, productName, price, description, id);
        if (actualizar) {
            window.location.href="/assets/screens/products.html"
        } else {
            throw new Error();
        };
    } catch(error){
        alert("Hubo un error")
    };
});