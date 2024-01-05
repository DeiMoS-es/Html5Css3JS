const TARIFA_HORA = 8;
const HORAS_DURACION = 89;

function dayRate(horasTrabajadas){
    return TARIFA_HORA * horasTrabajadas;
}

console.log(dayRate(HORAS_DURACION));
