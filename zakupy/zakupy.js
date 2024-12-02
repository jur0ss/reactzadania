class Cart
{
    constructor()
    {
        this.products = []
    }

    addProduct(name,price,amount)
    {
        const product = {name, price, amount}
        this.products.push(product)
    }

    removeProduct(name)
    {
        const index = this.products.indexOf(name)
        if (index !== -1) { // Check if the product exists
            this.products.splice(index, 1); // Remove the product
        }
    }

}