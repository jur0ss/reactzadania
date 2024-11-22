class Calculator
{
    result = 0
    dodaj(a,b)
    {
        return a+b
    }
    odejmij(a,b)
    {
        return a-b
    }
    pomnoz(a,b)
    {
        return a*b
    }
    podziel(a,b)
    {
        return a/b
    }
}

const dzialania = new Calculator()
console.log(dzialania.odejmij(10,15))