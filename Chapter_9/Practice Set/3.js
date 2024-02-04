async function Problem_3() {
    return new Promise((resolve, reject) => {
        setInterval(() => { 
            reject("The Promise Has Got Rejected.")
        }, 3000);
    })
    // jhfvgkh
}

const Arrow_Function = async () => {
    try {
        await Problem_3()
    } catch (error) {
        alert(error)
    }
}
Arrow_Function()