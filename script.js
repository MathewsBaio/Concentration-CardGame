
let  arrayLetters = ["C", "D", "B", "C", "E", "D", "A", "E", "B", "A"];


let cards = document.querySelectorAll(".card");
let count = 1
let lastcard = 1;
let newDupla = true
cards.forEach(card =>{
    card.addEventListener("click", event =>{
        if(count == 1) {
            newDupla = false
            card.textContent = `${arrayLetters[card.getAttribute("posicao")]}`;
            card.classList.add("A"); 
            lastcard = card.getAttribute("posicao")
            count++;
        } else if (count == 2) {
            if(arrayLetters[card.getAttribute("posicao")] == arrayLetters[lastcard]){
                card.textContent = `${arrayLetters[card.getAttribute("posicao")]}`;
                card.classList.add("A");
                count = 1;
                newDupla = true;
            } else{
                    if (!newDupla) {
                    card.textContent = `${arrayLetters[card.getAttribute("posicao")]}`
                    card.classList.add("B")
                    count = 3;
                    setTimeout(resetCards, 2000)
                    }
                
            }
        }
    })
})

function resetCards() {
    cards.forEach(card => {
        card.textContent = "X";
        card.classList.remove("A")
        card.classList.remove("B")
        count = 1
    })
}








