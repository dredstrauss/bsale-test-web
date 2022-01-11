const bloqueProducto = ({ img = '', nombre = '...', precio = '...' }) => {
    if (img == '' || img == null) img = '../assets/img/noimage.png';
    const compHtml = `
        <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div class="card tarjeta  container-fluid mb-4 pt-3">
                <img src="${img}" class="card-img-top img-fluid text-center pt-3" alt="${nombre}" />
                <div class="card-body d-flex align-items-end">
                    <div class="d-flex flex-column">
                        <p class="card-title fw-bold">${nombre}</p>
                        <div class="d-flex justify-content-between">
                            <div class="">
                                <p>$ ${precio}</p>
                            </div>
                            <div class="">
                                <a class="nav-link text-danger carrito"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    return compHtml
};

const cargando = (texto) => {
    const elemento = `
        <div class="text-center text-muted my-5">
            <div class="spinner-grow"></div>
            <p class="mt-1">${texto}</p>
        </div>
    `;
    return elemento
};

export {
    bloqueProducto,
    cargando
};
