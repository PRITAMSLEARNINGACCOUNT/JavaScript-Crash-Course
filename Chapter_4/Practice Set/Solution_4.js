let str = "Please Give Rs 1000"
for (let index = 0; index < str.length; index++) {
    if (str[index] == "1") {
        var Final_String = str.slice(index)
    }
}
console.log("So The Extracted Amount Is ", Number.parseInt(Final_String))
// let Num_Str=str.slice("Please Give Rs ".length)