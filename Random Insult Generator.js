//assigning random body parts to a variable

var randomBodyParts = ['nose','armpit','feet','head']

// assigning random adjectives to a variable
var randomAdjectives = ['smelly','filthy','nasty','bad']

// assigning random words to a variable
var randomWords = ['worm','floor','stick','monkey']

// randomly picking from any of the body parts
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 4)]

// randomly picking from any of the adjectives
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 4)]

// randomly picking from any of the words
var randomWord = randomWords[Math.floor(Math.random() * 4)]

console.log('Your '+randomBodyPart+' is like a '+ randomAdjective+' '+ randomWord +' !!!')