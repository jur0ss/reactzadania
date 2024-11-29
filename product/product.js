class Product
{
    constructor(name,price,category)
    {
        this.name = name
        this.price = price
        this.category = category
    }
}
const p1 = new Product("apple",5,"fruit")
const p2 = new Product("mango", 10, "fruit")
const p3 = new Product("carrot", 4, "vegetable")

const products = [p1,p2,p3]

const fruit = products.filter(category => category === "fruit")

console.log(fruit)
