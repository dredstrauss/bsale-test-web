const bloqueProducto = ({ img = '', nombre = '...', precio = '...' }) => {
    if (img == '' || img == null) img = '../assets/img/noimage.png';
    const compHtml = `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <div class="card tarjeta  container-fluid my-3 pt-3">
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

export {
    bloqueProducto
};
