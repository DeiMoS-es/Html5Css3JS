# (Re-)asignación
Las variables se escriben en camelCase, las constantes en SCREAMING_SNAKE_CASE.
Las constantes se definen con la palabra reservada CONST y las variables con let o var.
## Ejemplo:
    const MY_FIRST_CONSTANT = 10;
    let miFirstVariable = 10;

## Funciones:
Las funciones pueden exponerse a otros archivos mediante.
## Ejemplo:
    // file.js
    export const MY_VALUE = 10;
    export function add(num1, num2){
        return num1 + num2;
    }
    // file.spec.js
    import { MY_VALUE, add } from './file';

## Instrucciones:
¡La novia de Lucian está de camino a casa y él no ha preparado la cena de aniversario!

En este ejercicio, escribirás código para ayudar a Lucian a cocinar una exquisita lasaña basada en su libro de cocina favorito.

Tienes cuatro tareas relacionadas con el tiempo empleado en cocinar la lasaña.
### 1. Defina el tiempo esperado del horno en minutos.
Define la EXPECTED_MINUTES_IN_OVEN constante que representa cuántos minutos debe estar la lasaña en el horno. Hay que exportarlo. Según el libro de cocina, el tiempo esperado en el horno en minutos es 40.

### 2. Calcula el tiempo restante del horno en minutos.
Implemente la remainingMinutesInOvenfunción que toma como parámetro los minutos reales que la lasaña ha estado en el horno y devuelve cuántos minutos aún le quedan a la lasaña en el horno, según el tiempo de horno esperado en minutos de la tarea anterior.

### 3. Calcula el tiempo de preparación en minutos.
Implemente la preparationTimeInMinutesfunción que toma como parámetro la cantidad de capas que agregó a la lasaña y devuelve cuántos minutos pasó preparando la lasaña, asumiendo que cada capa le toma 2 minutos para prepararse.

### 4. Calcula el tiempo total de trabajo en minutos.
Implemente la totalTimeInMinutesfunción que requiere dos parámetros : el numberOfLayersparámetro es la cantidad de capas que agregó a la lasaña y el actualMinutesInOvenparámetro es la cantidad de minutos que la lasaña ha estado en el horno. La función debería devolver cuántos minutos en total has trabajado para cocinar la lasaña, que es la suma del tiempo de preparación en minutos y el tiempo en minutos que la lasaña ha estado en el horno en este momento.