function inputCaloriesByDay(day){
    if (day === 'Monday') {
        return 3500
    } else if (day === 'Tuesday') {
        return 2100
    } else if (day === 'Wednesday') {
        return 1800
    }else if (day === 'Thursday') {
        return 1500
    } else if (day === 'Friday') {
        return 3000
    }else if (day === 'Saturday') {
        return 3700
    }else if (day === 'Sunday') {
        return 2890
    }
} 


function getTotalCalories() {
    return inputCaloriesByDay('Monday') +
        inputCaloriesByDay('Tuesday') +
        inputCaloriesByDay('Wednesday') +
        inputCaloriesByDay('Thursday') +
        inputCaloriesByDay('Friday') +
        inputCaloriesByDay('Saturday') +
        inputCaloriesByDay('Sunday')
}


function getIdealCalories() {
    var idealDailyCalories = 2500
    return idealDailyCalories * 7
}



function calculateHealthPlan() {
    var actualCalories = getTotalCalories()
    var idealCalories = getIdealCalories()

    if (actualCalories == idealCalories) {
        return 'You consumed the right amount of calories'
    } 
    if (actualCalories > idealCalories) {
        return 'Looks like you have to start heading to the gym'
    }else{
        return 'Time for more'
    }
}



console.log(calculateHealthPlan())