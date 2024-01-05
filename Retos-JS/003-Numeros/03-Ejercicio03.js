function priceWithMonthlyDiscount(hourlyRate, projectDays, monthlyDiscountRate){
    const BILLABLE_DAYS_PER_MONTH = 22;
    const HOURS_PER_DAY = 8;
    // Calculo el número de meses completos y días restantes
    const fullMonths = Math.floor(projectDays / BILLABLE_DAYS_PER_MONTH);
    const remainingDays = projectDays % BILLABLE_DAYS_PER_MONTH;
    // Calculo el coste total para los meses completos con el descuento, (1 - monthlyDiscountRate) para calcular el porcentage que se cobra
    const fullMonthCost = Math.ceil(fullMonths * (BILLABLE_DAYS_PER_MONTH * HOURS_PER_DAY * hourlyRate) * (1 - monthlyDiscountRate));
    // Calculo el coste para los días sin descuento
    const remainingDaysCost = Math.ceil(remainingDays * HOURS_PER_DAY * hourlyRate);
    // Sumo los costes de los dos
    const totalCost = fullMonthCost + remainingDaysCost;
    return totalCost;
}
console.log(priceWithMonthlyDiscount(89, 230, 0.42));