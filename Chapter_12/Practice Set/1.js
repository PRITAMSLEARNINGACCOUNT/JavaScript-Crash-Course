async function Hello_World(value) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${value}`);
        }, 2000);
    })
}
(
    async function () {
        let Val = ["Hello", "World"];
        Hello_World(Val[0]).then((Return_Value) => {
            console.log(Return_Value);
        })
        let Return_Value_2 = await Hello_World(Val[1]);
        console.log(Return_Value_2);
    }
)()