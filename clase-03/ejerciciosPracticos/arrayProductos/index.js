// Creá un array con 10 números que representen los precios de los productos.

// Utilizá un método de array para calcular el precio con IVA incluido para cada valor.

// "Ahora que tenés los valores con IVA calculados, es momento de mostrarlos como un desarrollador profesional".

// Matías te desafía a usar template literals para estructurar tu salida de esta forma: El precio es: ${valor}.- IVA incluido.

let precioProductos = [150, 1600, 8400, 450, 790, 200, 500, 800, 950, 1500]

let precioProductosIva = []

const CALCULAR_IVA = (prices) => {
    return prices.forEach((el) => {
        precioProductosIva.push(el * 1.21)
    })
}

const IMPRIMIR_VALORES = (pricesIva) => {
    return pricesIva.forEach((el) => console.log(`El precio es: ${el}. - IVA incluido`))
}

CALCULAR_IVA(precioProductos)
IMPRIMIR_VALORES(precioProductosIva)