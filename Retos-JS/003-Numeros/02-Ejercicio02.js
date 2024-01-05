function daysInBudget(budget, ratePerHour){
    return Math.floor(budget/ (8 * ratePerHour));
}

console.log(daysInBudget(20000, 89));