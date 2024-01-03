document.addEventListener("DOMContentLoaded", function() {
    var domPanels = document.querySelectorAll(".panel");
    // Encuentro el panel que tiene la clase 'active' al cargar la página
    var activePanel = document.querySelector(".panel.active");

    domPanels.forEach(function(panel) {
        panel.addEventListener('click', function(){
            // Elimino la clase active del elemento que ya la tiene
            if (activePanel) {
                activePanel.classList.remove("active");
            }
            // Añade la clase 'active' al panel en el que se hizo clic
            panel.classList.add("active");
            // Actualiza el panel activo
            activePanel = panel;
        })
    })
});
