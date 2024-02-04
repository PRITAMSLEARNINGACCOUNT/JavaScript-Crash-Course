let Guess_Count = 0;
function Guess(random) {
    let guess
    while (true) {
        if (Guess_Count == 100) {
            alert("You're Disqualified Because You Didn't Able To Guess The Number Within 100 Times.")
            return 0
        }
        guess = prompt("Enter Your Guess??")
        if (guess > random) {
            alert("Your Guess Is Greater Than The Generated Number.")
            Guess_Count++
        }
        else if (guess < random) {
            alert("Your Guess Is Lesser Than The Generated Number.")
            Guess_Count++
        }
        else {
            alert("You Have Guessed The Correct Number")
            alert(`And Your Score Is ${100 - Guess_Count}`)
            return 0
        }

    }
}
alert("Let's Play A Number Guessing Game Where You Have To Guess The Number From 1 To 100.")
let Random = Math.random() * 100
Random = Number.parseInt(Random)
Guess(Random)
console.log(Random)