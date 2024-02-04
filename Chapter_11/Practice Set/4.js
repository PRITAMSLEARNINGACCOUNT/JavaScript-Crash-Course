class Human {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    run() {
        console.log(`${this.name} Is Running Even Though His/Her Age Is ${this.age}`)
    }
}
class Student extends Human {
    run() {
        console.log(`${this.name} Is Running In School Running Competition.`)
    }
}
let object = new Student("Pritam Saha", 10)
object.run()
console.log(`'Object' Is A Part Of/Belongs To 'Human' Class: ${object instanceof Human}`)