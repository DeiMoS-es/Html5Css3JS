document.addEventListener("DOMContentLoaded", function(){
    // Variables
    const progress = document.getElementById("progress");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const circles = document.querySelectorAll(".circle");
    let currentActive = 1; // Variable para controlar el elemento active
    
    nextBtn.addEventListener("click", () =>{
        // Cuando hago click, aumento el currentActive, ya que iré al siguiente nº
        currentActive++;
        //Tendré que saber si he llegado al final de los circulos
        if(currentActive > circles.length){
            currentActive = circles.length;
        }
    update()
    });

    prevBtn.addEventListener("click", () => {
        currentActive--;
        if(currentActive < 1 ){
            currentActive = 1;
        }
        update();
    });

    function update(){
        circles.forEach((element, indice) => {
            if(indice < currentActive){
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });

        const actives = document.querySelectorAll(".active");
        progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
        if(currentActive === 1){
            prevBtn.disabled = true;
        } else if(currentActive === circles.length){
            nextBtn.disabled = true;
        } else {
            prevBtn.disabled = false;
            nextBtn.disabled = false;
        }
    }
})