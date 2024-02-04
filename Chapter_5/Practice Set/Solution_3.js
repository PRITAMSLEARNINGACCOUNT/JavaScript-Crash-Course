function Divisable_By_10(x) {
    return x % 10 == 0
}
let arr = [50, 30, 2, 11, 209]
console.log("So The Array Of Numbers Which Are Divisable By 10 Is ")
console.log(arr.filter((x) => {
    return + x % 10 == 0
}))
