import {bulbozavr1, bulbozavr2} from "./pokemons.js"

const health1 = document.querySelector("#player-info-1 .property .health");
const lifes1 = document.querySelector("#player-info-1 .property .lifes");
const levels1 = document.querySelector("#player-info-1 .property .levels");
const exp1 = document.querySelector("#player-info-1 .property .exp");

const health2 = document.querySelector("#player-info-2 .property .health");
const lifes2 = document.querySelector("#player-info-2 .property .lifes");
const levels2 = document.querySelector("#player-info-2 .property .levels");
const exp2 = document.querySelector("#player-info-2 .property .exp");

function playGame(firstEnemy, secondEnemy){
    for (let i = 0; i < 3; i++) {
        setTimeout(()=> {
            firstEnemy.round(secondEnemy)
            secondEnemy.round(firstEnemy)

            console.log(firstEnemy, secondEnemy, i) 

            health1.innerText = firstEnemy.health
            lifes1.innerText = firstEnemy.life
            levels1.innerText = firstEnemy.level
            exp1.innerText = firstEnemy.experience

            health2.innerText = secondEnemy.health
            lifes2.innerText = secondEnemy.life
            levels2.innerText = secondEnemy.level
            exp2.innerText = secondEnemy.experience
        }, 3000)
    }
    console.log("function end")
    if (firstEnemy.experience < secondEnemy.experience) {
        return ("Winner is", secondEnemy.phrase) 
    } else {
        return ("Winner is", firstEnemy.phrase)
    }
}

const startBtr = document.querySelector(".start-btn");
startBtr.addEventListener("click", ()=> {
    playGame(bulbozavr1, bulbozavr2);
})