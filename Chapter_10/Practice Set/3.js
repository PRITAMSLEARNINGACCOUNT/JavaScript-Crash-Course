let global_var = 1
while (localStorage.getItem(`Note ${global_var}`) != null) {
    let Item = localStorage.getItem(`Note ${global_var}`)
    alert(`Note No ${global_var} Is ${Item}`)
    global_var++
}