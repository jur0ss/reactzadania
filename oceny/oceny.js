class Student
{
    constructor(age, name ,...grades)
    {
        this.name = name
        this.age = age
        this.grades = grades
    }
    getAverage()
    {
        let sum = 0
        for (let i=0;i<this.grades.length;i++)
        {
            sum+=this.grades[i]
        }
        let average = (sum/this.grades.length)
        return average
    }
}

const grades1 = new Student(17, "Jurek", 5, 6, 4, 3)
console.log(grades1.getAverage())
