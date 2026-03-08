console.log("script.js loaded!")

let cards = document.getElementsByClassName("dog-card");
let currentDog = 0;

function showNext(){
    cards[currentDog].computedStyleMap.display = "none";
    currentDog = currentDog + 1;

    if (currentDog >= cards.length){
        currentDog = 0;
    }
    cards[currentDog].style.display = "block";
}