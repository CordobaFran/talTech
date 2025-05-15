/* 
Misión 1: 

Utiliza la API pública de Rick and Morty (docs) para obtener la lista de personajes.

Con las herramientas then, catch y finally, procesa la respuesta y devuelve por consola un array con los primeros 5 resultados de 
los 20 personajes recibidos.

Impresionados por tu desempeño con promesas, Matías da un paso al frente. “El enfoque con promesas es sólido, pero en muchos casos
queremos trabajar de manera más legible y fluida. Aquí es donde entra async/await. Veamos si podés replicar tu solución anterior
usando esta técnica”.
*/

fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json()) // return implicito. sería lo mismo poner { return res.json() }
    .then((data) => {
        const Fivecharacters = data.results.slice(0, 5)
        return console.log(Fivecharacters);
    })
    .catch((err)=>console.log(err))
    .finally(()=>console.log("fetch completado"))