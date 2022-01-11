const url = 'http://localhost:3000/v1/';
import { bloqueProducto } from './componentes.js';

const getData = async( filtro = 'all' ) => {
    const response = await fetch(url + `${filtro}`);
    const data = await response.json();
    return data
};

getData().then(res => {
    const productos = res;
    document.getElementById('panel').innerHTML = '';
    productos.forEach((prod) => {
        const info = {
            img: prod.img,
            nombre: prod.name,
            precio: prod.price
        };
        const prodHtml = bloqueProducto(info);
        document.getElementById('panel').innerHTML += prodHtml;
    });

});
