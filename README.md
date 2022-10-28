# E-commerce. Hecho por [Athina Irazabal](https://github.com/athinaizb)

# [![CSS](https://img.shields.io/badge/Link%20al%20sitio-blueviolet)](https://athinaizb.github.io/curso-react/)

# Athina Pasteleria - Aplicacion desarrolada con React.js

## Comandos

Init Proyect
`npm i`

Develop mode
`npm start`

Deploy
`npm run build`

# Dependencias

    @mui/icons-material: ^5.10.2,
    @mui/material: ^5.10.2,
    @firebase: ^9.10.0,
    @sweetalert2: ^11.6.4,
    @react-spinners: ^0.13.6,


## Descripción

Athina Pasteleria es una single-page application  basado en un emprendemiento de venta de postres artesanales. Los productos y la orden de compra con los pedidos se almacenan en firebase.

La pagina consiste en una pagina principal, donde se muestran los productos que se ofrecen, se puede ver su nombre y su precio. Se puede agregar productos al carrito haciendo click.

### Items

Asimismo, si se hace click en la imagen del producto se llevara a la card del mismo, en donde se dara una descripcion del producto y una botonera para poder agregar productos al carrito. 

### Categorías
 En la barra de navegación se puede elegir entre las dos categorías de productos para visualizar. 

### Carrito

El carrito muestra la totalidad de los productos elegidos.
Finalmente consta de un boton para poder finalizar la compra, el cual te dirige hacia un formulario en el cual se debe introducir nombre, telefono y mail para poder generar una orden (la genera firebase una vez validado el formulario).


## Librerías utilizadas

### Material UI v5

Esta libreria fue utilizada debido a que nos otorga un abanico de posibilidades muy variado para  crear vistas dinámicas e interactivas de gran calidad, para que la experiencia de navegacion sea mas amena para el usuario.
