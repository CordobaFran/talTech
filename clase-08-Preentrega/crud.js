async function getAllProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        return data

    } catch (error) {

        return [{ error: `products does not exist` }]
    }

}

async function getProductById(id) {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json()
        return data

    } catch (error) {

        return [{ error: `product with id: ${id} does not exist` }]
    }
}

async function addProduct(title, price, category) {

    try {
        const product = { title, price: parseFloat(price), category };

        if(product.title && !isNaN(product.price) && product.category){
            const response = await fetch('https://fakestoreapi.com/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(product)
            })
            const data = await response.json()
            return data

        }else if(price && isNaN(price)){
            return [{error:"error: price is not defined"}]

        } else {
            return [{error: "bad request: Try with POST 'products {title} {price} {category}'"}]

        }

    } catch (error) {

        return [{ error: `product ${title} cannot be added` }]
    }
}

async function deleteProduct(id) {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
            method: 'DELETE'
        })
        const data = await response.json()
        // console.log(`product ${data.title} with id: ${data.id} deleted`)
        if (data){
            return data
        } else {
            return [{error: "product does not exist"}]
        }

    } catch (error) {

        return [{ error: `product with id ${id} cannot be deleted` }]
    }
}

export { getAllProducts, getProductById, addProduct, deleteProduct }