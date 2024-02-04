const Async_Func_1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("First Promise Is Resolved")
        }, 3000);
    })

}
const Async_Func_2 = async () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve("Second Promise Is Resolved")
        }, 3000);
    })
}
const Async_Func_3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve("Third Promise Is Also Resolved")
        }, 3000);
    })

}

const Final = async () => {
    console.time("Everything Took This Much Time While Awating 3 Promises One By One")
    let Result_1 = await Async_Func_1()
    let Result_2 = await Async_Func_2()
    let Result_3 = await Async_Func_3()
    console.timeEnd("Everything Took This Much Time While Awating 3 Promises One By One")
}
const Final_2 = async () => {
    console.time("Everything Took This Much Time While Awating 3 Promises Together")
    let Final_Result = await Promise.all([Async_Func_1(), Async_Func_2(), Async_Func_3()])
    console.timeEnd("Everything Took This Much Time While Awating 3 Promises Together")
}
Final()
Final_2()
console.log("Please Wait Until You See 2 Different Seconds")