# Pre-Entrega de Franco Córdoba

En este proyecto de node.js podremos realizar consultas, agregar productos y borrarlos con la API de <https://fakestoreapi.com/> por medio de la consola.

iniciar con:

- `npm run start`
  
realizar las consultas con los siguientes parametros y metodología:

- `GET products`
- `GET products/<productId>`
- `POST products <title> <price> <category>`
- `DELETE products/<productId>`

---

Este proyecto contiene dos archivos principales: `crud.js` e `index.js`. A continuación se explica la función de cada uno:

## `crud.js`

Este archivo implementa las operaciones básicas de CRUD (Crear, Leer, Actualizar, Eliminar) sobre una colección de datos extraídos de la API. Aquí encontrarás funciones para:

- **Crear**: Agregar nuevos elementos a la colección.
- **Leer**: Obtener y mostrar los elementos existentes.
- **Eliminar**: Quitar elementos de la colección.

## `index.js`

Este archivo es el punto de entrada de la aplicación. Su función principal es:

- Importar las funciones del archivo `crud.js`.
- Manejar las entradas de parametros por consola para interactuar con el CRUD entregando los respectivos datos.

---
