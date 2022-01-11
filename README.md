# Sitio web de prueba de postulación a BSale (front-end)

## Tecnologías usadas

- HTML / CSS
- Bootstrap v5
- JavaScript ECMA6

## UI

El sitio cuenta una vista principal donde se muestra el catálogo completo en la carga inicial.

### Selector de categorías

En el panel izquierdo un selector permite restringir el catálogo a categorías específicas, o todo.

### Búsqueda por productos

Tanto en todas las categorías como en una específica, el cuadro de búsqueda permite ver resultados instantáneamente justo debajo.

Si el usuario presiona *enter*, se despliegan en el sector principal los productos de la búsqueda actual.

Si el usuario cliquea alguno de los resultados de la búsqueda, se muestra solamente ese producto.

### Responsividad

El sitio es completamente responsivo, usando sistema de grillas de Bootstrap para adaptarlo según tamaño de la ventana, desde escritorio de alta resolución a móvil (para alta resolución, todas las medidas de CSS usadas son relativas).

## Detalles del código (funcionamiento)

Como elemento en común para todo el funcionamiento del sitio, los productos llamados desde la API se normalizan en minúsculas y se transforman a uso de mayúscula por palabra para desplegar ante usuario (esto es relevante en la función de búsquedas, explicado más abajo).

### Carga inicial

Al visitar el sitio por primera vez, se pide a la API un listado total de productos para el despliegue en la pantalla.

Al mismo tiempo, se pide a la API la lista de categorías disponibles para generar el menú selector a la izquierda.

### Selector de categorías

Al cliquear cualquiera de las opciones del selector, se hace un llamado a la API de los productos de esa categoría para desplegarlos en pantalla (importante en caso de que hubiera una gran cantidad de productos y no fuera conveniente cargar todo; ej.: si la carga inicial fuera con paginación).

Además, al cambiar así de categoría, también se limpia el área de búsquedas.

### Búsqueda de productos por nombre

Cada vez que el usuario tipea en el cuadro de búsqueda, ocurre lo siguiente:

- Se dispara una función que toma lo escrito hasta el momento y lo compara con el inicio de cada palabra del nombre de cada uno de los productos de la vista actual.
- Se genera un arreglo con los resultados y se despliega justo abajo del cuadro de búsqueda.

Si el usuario presiona la tecla *enter*, se envía ese arreglo a la misma función que despliega los productos desde la API (que ya están guardados en una variable disponible para todo el sitio, a modo de "state").

Si el usuario cliquea uno de los resultados de búsqueda, se ejecuta el mismo proceso del punto anterior, pero enviando un arreglo solamente con ese producto.

Si el usuario borra toda la búsqueda, la función se interrumpe y se ejecuta la función encargada de limpiar la búsqueda (la misma que se ejecuta al cambiar de categoría).

Esta función limita la cantidad de resultados a 10.

## Implementaciones opcionales descartadas

Estas son funcionalidades que se podrían implementar, pero que se omitieron intencionalmente por plazo.

### Paginación de productos

En el objeto entregado por la API, es posible agregar un elemento común que contenga la cantidad de páginas totales y la página actual. Las consultas tendrían un parámetro opcional de número de página a consultar de esta forma (siendo la primera la consultada siempre por defecto).

Así en el front-end, si el código detecta que es solo una página, mostraría todo tal como está. Pero si hubiera más de una, se generarían los botones de navegación según la cantidad de páginas disponibles indicadas por la API y realizando cada una la consulta según su número.

### Filtro por precios de productos

Usando un *slider* y un botón de confirmación, el valor del mismo se enviaría a una nueva consulta hacia la API, esta vez agregando un precio como parámetro. La API, por su parte, tendría que tener otra consulta, similar a la de categorías, pero con un operador para comparar el número enviado con los precios de los productos.

### Destacar descuentos

Una función podría reordenar el arreglo de productos ya disponible para poner los productos con mayor descuento en los primeros lugares (siendo "mayor descuento" el cálculo del precio final, para apuntar a los productos que más bajan su precio en total). Y en la función que genera el bloque de un producto, se enviaría un parámetro opcional, que de ser verdadero, de un distintivo visual al producto (ej.: color del borde).

### Cantidad de resultados según el espacio disponible

Los resultados de búsqueda están arbitrariamente limitados a 10, pero podría calcularse la cantidad según la cantidad de productos desplegados. De esta forma, si la búsqueda arrojara muchos resultados, estos aprovecharían todo el espacio disponible sin sobrepasar el espacio generado por los productos desplegados. De todas formas se mantendría un mínimo según el alto del *viewport*, en caso de que se esté desplegando menos productos que el espacio disponible según lo que vea el usuario.
