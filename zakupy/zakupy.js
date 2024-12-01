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
        this.products = this.products.splice(index, 1)
    }

}