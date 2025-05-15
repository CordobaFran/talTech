/*
Misión 2:

Realiza el mismo ejercicio anterior, pero esta vez usa una función asíncrona con async y await para consumir la API.

Asegúrate de manejar errores correctamente con un bloque try/catch.

Matías concluye: “Queremos ver un código limpio, fácil de entender y bien estructurado. Si podés manejar ambas técnicas,
será una señal de que estás preparado para enfrentar tareas reales en TechLab”.
*/

function characters(qty = 5) {
    return fetch("https://rickandmortyapi.com/api/character")
        .then((el) => el.json())
        .then((data) => data.results.slice(0, qty))
        .catch((err) => console.log(err))
        .finally(() => console.log("fetch task finished"))
}

async function getCharacters(qty) {
    try {
        const char = await characters(qty)
        return console.log(char);
    } catch (error) {
        console.log(error);
    }
}

getCharacters(5)