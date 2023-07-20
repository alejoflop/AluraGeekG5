import { productServices } from "../services/client-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    const url = document.querySelector("[data-url]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const productName = document.querySelector("[data-productName]").value;
    const price = document.querySelector("[data-price]").value;
    const description = document.querySelector("[data-description]").value;

    try {
        const add = productServices.addProduct(url, categoria, productName, price, description);
        if (add) {
            window.location.href = "/assets/screens/products.html"
        } else {
            throw new Error();
        }
    } catch(error){
        alert("Hubo un error")
    }
});