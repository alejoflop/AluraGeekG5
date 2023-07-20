import { productServices } from "../services/client-service.js";

const crearNuevoProducto = (producto) => {
    const {url, productName, price, id} = producto

    const linea = document.createElement("tr");
    const contenido = `
    <div class="product__card">
    <img src="${url}" alt="Foto producto ${productName}">
    <div class="product__info">
        <p class="product__name">${productName}</p>
        <p class="product__price">$ ${price}</p>
        <a href="/assets/screens/productInfo.html?id=${id}" data-verProducto>Ver producto</a>
    </div>
    </div>`;

    linea.innerHTML = contenido;

    return linea;
};

const seccionStarWars = document.querySelector('[data-starWarsCategory]')
const seccionConsolas = document.querySelector('[data-consolasCategoria]')
const seccionDiversos = document.querySelector('[data-diversosCategoria]')


const cargaProductosGeneral = async() => {
    const data = await productServices.listaProductos()

    data.filter(producto => {
        if(producto.categoria === 'Star Wars') {
            const nuevaCard = crearNuevoProducto(producto)
            seccionStarWars.appendChild(nuevaCard)
        }
        if(producto.categoria === 'Consolas') {
            const nuevaCard = crearNuevoProducto(producto)
            seccionConsolas.appendChild(nuevaCard)
        }
        if(producto.categoria === 'Diversos') {
            const nuevaCard = crearNuevoProducto(producto)
            seccionDiversos.appendChild(nuevaCard)
        }
    });
    
};

cargaProductosGeneral()