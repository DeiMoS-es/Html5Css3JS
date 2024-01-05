import {PREPARATION_MINUTES_PER_LAYER} from "./01-Ejercicio01";

var numberOfLayers = 3;
var actualMinutesInOven = 20
function totalTimeInMinutes(numberOfLayers, actualMinutesInOven){
    let totalTimeToPrepareLayers = numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
    return totalTimeToPrepareLayers + actualMinutesInOven;
}

  console.log(totalTimeInMinutes(numberOfLayers, actualMinutesInOven));