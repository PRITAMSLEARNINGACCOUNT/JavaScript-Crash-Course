function N(n) {
    return new Promise((resolve, reject) => {
        setInterval(() => {
            resolve(`Printing After ${n} Seconds.`);
        }, 1000 * n);
    })
}
// let Custom_N = prompt("Enter The Seconds??\n");
let Custom_N = 3;
(
    () => {
        N(Custom_N).then((val) => {
            console.log(val);
        })
    }
)(Custom_N)