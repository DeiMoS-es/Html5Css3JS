document.addEventListener("DOMContentLoaded", function(){
    const boxes = document.querySelectorAll(".box");
    window.addEventListener("scroll", checkBoxes); // la función checkBoxes se ejecuta cada vez que se haga scroll

    checkBoxes(); //comprobamos como están las cajas

    function checkBoxes() {
        /*
        window.innerHeight obtenemos el alto de la pantalla, 
        luego calculamos el 80% 
        */
        const triggerBottom = (window.innerHeight * 80) / 100;
        // const triggerBottom = window.innerHeight / 5 * 4
        boxes.forEach(box => {
            // boxTop almacena la distancia desde la parte superior del elemento box, hasta el borde superior de la ventana de visualización
            const boxTop = box.getBoundingClientRect().top;
            console.log("boxTop: " + boxTop + "TriggerBottom: " + triggerBottom);
            if(boxTop < triggerBottom){
                box.classList.add("show");
            } else{
                box.classList.remove("show");
            }
        });
        console.log(window.innerHeight);
    }
});