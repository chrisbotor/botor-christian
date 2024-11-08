console.log("Welcome to my Guessing game")
let numberOfTries = 0
let secretNumber = 88

let inputNumber = prompt("guess the number")

while (Number(inputNumber) != secretNumber)  {
    numberOfTries++

    if (Number(inputNumber) > secretNumber )  {
        console.log("Too high")
    } else if (Number(inputNumber) < secretNumber){
        console.log("Too low")
    }  else  {
        break
    }

    inputNumber = prompt("guess the number")
}


console.log("You guess the secret number in " +numberOfTries + " tries")    