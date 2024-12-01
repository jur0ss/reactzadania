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

const fruits = products.filter(product => product.category === "fruit") //filtrowanie produktu po kategorii
const vegetables = products.filter(product => product.category === "vegetable")

console.log(`Owoce: ${fruits.map(fruit => fruit.name).join(", ")}`) // wyświetla listę nazw owoców w koszyku, oddzielonych przecinkiem
console.log(`Warzywa: ${vegetables.map(vegetable => vegetable.name).join(", ")}`)

const min = 5
const max = 10
const priceRange = products.filter(product => {return product.price >= min && product.price <= max}) //zwraca produkty w danym przedziale cenowym

console.log(`Produkty w tym zakresie cenowym: ${priceRange.map(product => product.name).join(", ")} `)

