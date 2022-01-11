import { cargando } from './componentes.js';

const mayus = (str) => { return str.trim().replace(/^\w/, (l) => l.toUpperCase()) };

const mayusTodas = (str) => {
    let palabras = str.split(" ");
    palabras = palabras.filter(p => p !== '')
    palabras = palabras.map((palabra) => {
        let p = palabra.toLowerCase();
        p = p[0].toUpperCase() + p.substr(1);
        return p
    });
    return palabras.join(' ')
};

const mayusTodasNombreProductos = (arr,mayus) => {
    let resultado = arr;
    resultado.forEach((prod) => {
        if (mayus) {
            prod.name = mayusTodas(prod.name);
        } else {
            prod.name = prod.name.toLowerCase();
        }
    });
    return resultado
};

const spinner = (texto) => {
    document.getElementById('panel').innerHTML = cargando(texto);
};

const buscaProductos = (arr,busc) => {
    console.log(arr);
    console.log(`Busca: ${busc}`);
};

export {
    mayus,
    mayusTodasNombreProductos,
    spinner,
    buscaProductos
}
