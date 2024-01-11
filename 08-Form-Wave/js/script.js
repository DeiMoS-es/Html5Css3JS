document.addEventListener("DOMContentLoaded", function () {
  const labels = document.querySelectorAll(".form-control label");
  labels.forEach((label) => {
    label.innerHTML = label.innerText
      .split("") // Convierte el texto dentro de la etiqueta en un array de caracteres.
      .map(
        (letra, idx) =>
          `<span style="transition-delay:${idx * 50}ms">${letra}</span>`
      )
      .join("");
  });
});
