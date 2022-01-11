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
    let resultados = arr.map(prod => {
        let coincide = false;
        let palabras = prod.name.split(' ');
        palabras.forEach((palabra) => {
            let trozo = palabra.slice(0,busc.length).toLowerCase();
            if (trozo == busc) { coincide = true }
        });
        if (coincide) { return prod }
    })
    resultados = resultados.filter(prod => prod)
    return resultados
};

export {
    mayus,
    mayusTodas,
    mayusTodasNombreProductos,
    spinner,
    buscaProductos
}
