class Product {
    constructor(name,category,price,qty) {
        this.id = crypto.randomUUID(),
        this.name = name,
        this.category = category,
        this.price = price,
        this.qty = qty
    }
}

export default Product