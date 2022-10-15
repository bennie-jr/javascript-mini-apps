var userName = prompt('What is your name?')

if (userName) {
    console.log('Hello '+ userName+ '.')
}else{
    console.log('Hello')
}

var userQuestions = prompt('PLease ask a question')
console.log(userName+ " is asking: " +userQuestions)

var randomNumber = Math.floor(Math.random() * 8)


if (randomNumber === 0) {
    console.log('You do not need to know now.')
}else if (randomNumber === 1) {
    console.log('Concentrate and ask one more time')
}else if (randomNumber === 2) {
    console.log('Reply a bit hazy, try again')
}else if (randomNumber === 3) {
    console.log('Cannot predict now, sorry')
}else if (randomNumber === 4) {
    console.log('My reply to your question is no')
}else if (randomNumber === 5) {
    console.log('My sources say no')
}else if (randomNumber === 6) {
    console.log('Outlook not so good')
}else{
    console.log('Signs point to a strong YES')
}