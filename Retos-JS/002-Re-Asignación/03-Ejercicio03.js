import {PREPARATION_MINUTES_PER_LAYER} from "./01-Ejercicio01"
var capas = 2;
function preparationTimeInMinutes(capas){
  return PREPARATION_MINUTES_PER_LAYER * capas;
};
console.log(preparationTimeInMinutes(capas));