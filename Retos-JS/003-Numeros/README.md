# Números
JavaScript solo trabaja con dos tipos de números. <strong>number</strong> y <strong>bigint</strong>.

## Redondeo
Hay un objeto global llamado <strong>Math</strong> que incorpora varias funciones.
Por ejemplo para el redondeo hacia abajo <strong> floor </strong> o hacia arriba <strong> ceil </strong>.
### Ejemplo:
Math.floor(234.34); // => 234
Math.ceil(234.34); // => 235

## Operadores aritméticos
Existen 6 operadores en JavaScript:
- El operador de suma +.
- El operador de resta -.
- El operador de multiplicación *.
- EL operador de división /.
- El operador de resto %.
- El operador de exponente **.
Se sigue el mismo orden que en las operaciones aritméticas, regla PEDMAS (Paréntesis, Exponentes, División/Multiplicación, Suma/Resta).

## Instrucciones:
### 1. Calcule la tarifa diaria dada una tarifa por hora.
Un cliente se pone en contacto con el autónomo para consultarle sus tarifas. El autónomo explica que trabajan 8 horas al día. Sin embargo, el autónomo sólo conoce sus tarifas por hora para el proyecto. Ayúdelos a estimar una tarifa diaria dada una tarifa por hora.

### 2. Calcule el número de días laborables con un presupuesto fijo.
Otro día, un jefe de proyecto ofrece al autónomo trabajar en un proyecto con un presupuesto fijo. Dado el presupuesto fijo y la tarifa por hora del autónomo, ayúdale a calcular el número de días que trabajaría hasta que se agote el presupuesto. El resultado debe redondearse hacia abajo al número entero más cercano.

### 3. Calcule la tasa de descuento para grandes proyectos.
A menudo, los clientes del profesional independiente los contratan para proyectos que abarcan varios meses. En estos casos, el autónomo decide ofrecer un descuento por cada mes completo, y los días restantes se facturan a tarifa diaria. Cada mes tiene 22 días facturables. Ayúdelos a estimar el costo de dichos proyectos, dada una tarifa por hora, la cantidad de días que abarca el proyecto y una tasa de descuento mensual. El descuento siempre se pasa como un número, donde 42%se convierte en 0.42. El resultado debe redondearse al número entero más cercano .