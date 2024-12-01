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
const p4 = new Product("tomato", 6, "vegetable")

const products = [p1,p2,p3,p4]

const fruits = products.filter(product => product.category === "fruit")
const vegetables = products.filter(product => product.category === "vegetable")

console.log(`Fruits: ${fruits.map(fruit => fruit.name).join(", ")}`);
console.log(`Vegetables: ${vegetables.map(vegetable => vegetable.name).join(", ")}`);
