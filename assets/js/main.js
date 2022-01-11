const url = 'https://bsale-test-api-psg.herokuapp.com/v1/';
import { bloqueProducto, cargando } from './componentes.js';
import { mayus, mayusTodas, mayusTodasNombreProductos, spinner, buscaProductos } from './herramientas.js';

let productos;

const getData = async({ filtro = 'all' }) => {
    const response = await fetch(url + `${filtro}`);
    const data = await response.json();
    return mayusTodasNombreProductos(data,false)
};

const getCat = async() => {
    const response = await fetch(url);
    const data = await response.json();

    Object.keys(data).forEach((cat) => {
        document.getElementById('selector').innerHTML += `<option class="selectorCategoria" value='${cat}'>${mayus(cat)}</option>`;
    });

    return 1
};

const mostrarLista = (arr) => {
    document.getElementById('panel').innerHTML = '';
    arr = mayusTodasNombreProductos(arr,true);
    arr.forEach((prod) => {
        const info = {
            img: prod.img,
            nombre: prod.name,
            precio: prod.price
        };
        const prodHtml = bloqueProducto(info);
        document.getElementById('panel').innerHTML += prodHtml;
    });
};

const listaProductos = (filtro,textoCarga) => {
    spinner(textoCarga);
    getData({ filtro: filtro }).then(res => {
        productos = res;
        mostrarLista(productos);
    });
    return 1
};

const listaResultados = (arr) => {
    const area = document.getElementById('resultados');
    if (arr.length === 0) return
    area.innerHTML = '';
    arr.forEach((resultado) => {
        area.innerHTML += `<a href="#" class="nav-link resultado">${mayusTodas(resultado.name)}</a>`;
    });
    document.querySelectorAll('.resultado').forEach((item) => {
        item.addEventListener('click', (e) => {
            let producto = e.target.innerHTML;
            let enArray = productos.filter(p => p.name === producto)
            mostrarLista(enArray);
        })
    });
}

document.getElementById('busqueda').addEventListener('keyup', (e) => {
    let campo = e.target;
    let buscando = e.target.value;
    campo.setAttribute("value", buscando);
    let encontrados = buscaProductos(productos,buscando);
    listaResultados(encontrados)
})

// Carga inicial

getCat().then((r) => {
    listaProductos('all','Cargando...');
    document.getElementById('selector').addEventListener('change', (e) => {
        let sel = e.target.value;
        if (sel === 'todo') sel = 'all';
        listaProductos(sel,'Filtrando...');
    });
});
