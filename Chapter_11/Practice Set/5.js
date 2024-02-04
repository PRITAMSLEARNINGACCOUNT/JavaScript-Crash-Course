class Complex_Number {
    constructor(real, imaginary) {
        this.Real_Part = real
        this.Imaginary_Part = imaginary
    }
    get RealComplex() {
        return Real_Part
    }
    set RealComplex(Real) {
        this.Real_Part = Real
    }
    get ImaginaryComplex() {
        return Imaginary_Part
    }
    set ImaginaryComplex(Imaginary) {
        this.Imaginary_Part = Imaginary
    }
    Addition(Object) {
        console.log(`${this.Real_Part + Object.Real_Part}+${this.Imaginary_Part + Object.Imaginary_Part}i`)
    }
}

let Complex = new Complex_Number(4, 5)
Complex.RealComplex = 10
Complex.ImaginaryComplex = 10
let Complex_2 = new Complex_Number(4, 5)
Complex.Addition(Complex_2)