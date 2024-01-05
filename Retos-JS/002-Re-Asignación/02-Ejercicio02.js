import {EXPECTED_MINUTES_IN_OVEN} from "./01-Ejercicio01"
var actualMinutesInOven = 30
function remainingMinutesInOven(actualMinutesInOven) {
    return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven
}
console.log(remainingMinutesInOven(actualMinutesInOven));