console.log (1)

function changeImage(card) {
    if (card == "Second_Card"){
        let previousCard = document.getElementById("First_Card");
        if (previousCard.src.includes("/Image/Backofcard.jpg")) {
            return
        }
    }
    if (card == "Third_Card"){
        let previousCard = document.getElementById("Second_Card");
        if (previousCard.src.includes("/Image/Backofcard.jpg")) {
            return
        }
    }
    if (card == "Forth_Card"){
        let previousCard = document.getElementById("Third_Card");
        if (previousCard.src.includes("/Image/Backofcard.jpg")) {
            return
        }
    }

    var selectCard = document.getElementById(card)
    if (selectCard.src.includes("/Image/Backofcard.jpg") )
    {
        let newScr = randomCard();
        selectCard.src  = newScr ;
    }
}

function randomCard(){
    let cardNumber = Math.floor(Math.random()*79);
    let isreverse =  Math.floor(Math.random()*2) == 0? "u":"r";
    return "Image/" + cardNumber + isreverse +".jpg";
}