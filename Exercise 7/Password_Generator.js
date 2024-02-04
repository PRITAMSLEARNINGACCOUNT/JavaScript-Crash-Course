class Password_Generator {
    Weak_Password() {
        let string = ""
        for (let index = 0; index < 8; index++) {
            string += String.fromCharCode(Math.floor(Math.random() * 26) + 65)
        }
        return string
    }
    Strong_Password() {
        let string = ""
        for (let index = 0; index < 2; index++) {
            let temp_string = String.fromCharCode(Math.floor(Math.random() * 26) + 65)
            string += temp_string.toLowerCase()
        }
        for (let index = 0; index < 2; index++) {
            string += String.fromCharCode(Math.floor(Math.random() * 6) + 91)
        }
        for (let index = 0; index < 2; index++) {
            string += String.fromCharCode(Math.floor(Math.random() * 15) + 33)
        }
        for (let index = 0; index < 2; index++) {
            string += String.fromCharCode(Math.floor(Math.random() * 26) + 65)
        }
        return string
    }
    Medium_Password() {
        let string = ""
        for (let index = 0; index < 4; index++) {
            string += String.fromCharCode(Math.floor(Math.random() * 26) + 65)
        }
        for (let index = 0; index < 4; index++) {
            let temp_string = String.fromCharCode(Math.floor(Math.random() * 26) + 65)
            string += temp_string.toLowerCase()
        }
        return string
    }

}
let Weak_Pass = new Password_Generator
console.log(Weak_Pass.Strong_Password())
console.log(Weak_Pass.Medium_Password())
console.log(Weak_Pass.Weak_Password())