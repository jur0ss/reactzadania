class Calculator
{
    result = 0
    add(a,b)
    {
        return a+b
    }
    subtract(a,b)
    {
        return a-b
    }
    multiply(a,b)
    {
        return a*b
    }
    divide(a,b)
    {
        return a/b
    }
}

const dzialania = new Calculator()
console.log (dzialania.add(10,15))