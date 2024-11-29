class Calculator
{
    result = 0
    add(a,b)
    {
        console.log(`Wynik to ${a+b}`)
    }
    subtract(a,b)
    {
        console.log(`Wynik to ${a-b}`)
    }
    multiply(a,b)
    {
        console.log(`Wynik to ${a*b}`)
    }
    divide(a,b)
    {
        console.log(`Wynik to ${a/b}`)
    }
}

const dzialania = new Calculator()
dzialania.add(10,15)