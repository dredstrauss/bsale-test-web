const url = 'http://localhost:3000/v1/';
import { bloqueProducto } from './componentes.js';

const mayus = (str) => { return str.trim().replace(/^\w/, (l) => l.toUpperCase()) };

const getData = async({ filtro = 'all' }) => {
    const response = await fetch(url + `${filtro}`);
    const data = await response.json();
    return data
};

const getCat = async() => {
    const response = await fetch(url);
    const data = await response.json();

    Object.keys(data).forEach((cat) => {
        document.getElementById('selector').innerHTML += `<option class="selectorCategoria" value='${cat}'>${mayus(cat)}</option>`;
    });

    return 1
};

const listaProductos = (filtro) => {
    getData({ filtro: filtro }).then(res => {
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

    return 1
};

getCat().then((r) => {
    listaProductos('all');
    document.getElementById('selector').addEventListener('change', (e) => {
        let sel = e.target.value;
        if (sel === 'todo') sel = 'all';
        listaProductos(sel);
    });

    // document.querySelectorAll('.selectorCategoria').forEach((op) => {
    //     console.log(op);
    //     op.addEventListener('click', (e) => {
    //         console.log('Tin!');
    //     })
    // });
})
