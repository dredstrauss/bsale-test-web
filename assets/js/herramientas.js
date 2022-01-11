import { cargando } from './componentes.js';

const mayus = (str) => { return str.trim().replace(/^\w/, (l) => l.toUpperCase()) };

const spinner = (texto) => {
    document.getElementById('panel').innerHTML = cargando(texto);
};

export {
    mayus,
    spinner
}
