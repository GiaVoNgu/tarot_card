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
        let newScr = "";
        do{
            newScr = randomCard();
        }  while (isUniqueCard(newScr)==false)
        selectCard.src  = newScr ;
    }
}

function randomCard(){
    let cardNumber = Math.floor(Math.random()*79);
    let isreverse =  Math.floor(Math.random()*2) == 0? "u":"r";
    return "Image/" + cardNumber + isreverse +".jpg";
}

function isUniqueCard(cardSrc){
    let firstCard = document.getElementById("First_Card");
    let secondCard = document.getElementById("Second_Card");
    let thirdCard = document.getElementById("Third_Card");
    let forthCard = document.getElementById("Forth_Card");

    if (firstCard.src.includes(cardSrc)|| secondCard.src.includes(cardSrc)||thirdCard.src.includes(cardSrc)|| forthCard.src.includes(cardSrc)){
        return false
    }
}

function hiddenChoosenCard(element){
    let forthCard = document.getElementById("Forth_Card");
    if (forthCard.src.includes('Image/place_holder.JPG')){
        // var el = document.getElementById(element_id);
        element.classList.add("choosen_card");
        placeCard();
    }
    console.log ('run')
}
function placeCard(){
    let firstCard = document.getElementById("First_Card");
    let secondCard = document.getElementById("Second_Card");
    let thirdCard = document.getElementById("Third_Card");
    let forthCard = document.getElementById("Forth_Card");
    if (firstCard.src.includes('Image/place_holder.JPG')){
        firstCard.src = 'Image/Backofcard.jpg';
        return;
    }
    if (secondCard.src.includes('Image/place_holder.JPG')){
        secondCard.src = 'Image/Backofcard.jpg';
        return;
    }
    if (thirdCard.src.includes('Image/place_holder.JPG')){
        thirdCard.src = 'Image/Backofcard.jpg';
        return;
    }
    forthCard.src = 'Image/Backofcard.jpg'
}

document.querySelectorAll('.card_in_deck').forEach(item=> {
    item.addEventListener('click', ()=>{
        hiddenChoosenCard(item)})
})

// document.addEventListener('click',function(e){
//     if (e.target.classList == "card_in_deck"){
//         hiddenChoosenCard(e);
//     }
// });
