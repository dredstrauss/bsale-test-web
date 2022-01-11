const url = 'https://bsale-test-api-psg.herokuapp.com/v1/';
import { bloqueProducto, cargando } from './componentes.js';
import { mayus, spinner } from './herramientas.js';

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

const listaProductos = (filtro,textoCarga) => {
    spinner(textoCarga);
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

// Carga inicial

getCat().then((r) => {
    listaProductos('all','Cargando...');
    document.getElementById('selector').addEventListener('change', (e) => {
        let sel = e.target.value;
        if (sel === 'todo') sel = 'all';
        listaProductos(sel,'Filtrando...');
    });
});
