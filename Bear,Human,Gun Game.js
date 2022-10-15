function getUserChoice(userInput) {
    userInput = userInput.toLowerCase()
    if (userInput = "bear") {
        return userInput        
    } else if (userInput = "human") {
        return userInput
    } else if (userInput = "gun") {
        return userInput
    } else{
        console.log("Sorry invalid choice. Please try again")
    }
    
}

function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber == 0) {
        return "bear"
    }else if (randomNumber == 1) {
        return 'human'
    }else{
        return 'gun'
    }
}


function determineWinner(userChoice,computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie"
    }

    if (userChoice === 'human') {
        if (computerChoice === 'bear') {
            return 'Computer Won'
        }else{
        return 'Congratulations you won'
        }    
    }

    if (userChoice === 'bear') {
        if (computerChoice === 'gun') {
            return 'Computer Won'
        }else{
            return 'Congratulations you won'
        }
    }

    if (userChoice === 'gun') {
        if (computerChoice === 'human') {
            return 'Computer Won'
        }else{
            return 'Congratulations you won'
        }
        
    }
}



function playGame() {
    var promptUserChoice = prompt('Please choose bear, human or gun')
    var userChoice = getUserChoice(promptUserChoice)
    var computerChoice = getComputerChoice()
    
    console.log(userChoice)
    console.log(computerChoice)
    console.log(determineWinner(userChoice, computerChoice))
}

playGame()