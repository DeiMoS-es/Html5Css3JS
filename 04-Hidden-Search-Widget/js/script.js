document.addEventListener("DOMContentLoaded", function(){
    const iconDom = document.querySelector("i");
    const inputDom = document.querySelector("input");
    console.log(iconDom);

    iconDom.addEventListener("click", () => {
        console.log("CLIC");
        inputDom.classList.add("active");
        iconDom.classList.add("active");
    });
});