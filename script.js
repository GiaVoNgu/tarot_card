
let firstCard = document.getElementById("First_Card");
let secondCard = document.getElementById("Second_Card");
let thirdCard = document.getElementById("Third_Card");
let forthCard = document.getElementById("Forth_Card");
let textMessage = document.getElementById("text_message");
let sendBtn = document.getElementById("SendBtn")
//bốc bài thực 
function changeImage(card) {
    if (card == "Second_Card"){
        let previousCard = firstCard;
        if (previousCard.src.includes("/Image/Backofcard.jpg")) {
            return
        }
    }
    if (card == "Third_Card"){
        let previousCard = secondCard;
        if (previousCard.src.includes("/Image/Backofcard.jpg")) {
            return
        }
    }
    if (card == "Forth_Card"){
        let previousCard = thirdCard;
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
    if (forthCard.src.includes('/Image/Backofcard.jpg') == false){
        textMessage.querySelectorAll('p')[0].innerHTML = 'Trải bài của bạn đã hoàn tất';
        textMessage.querySelectorAll('p')[1].innerHTML = 'Hãy bấm vào nút "Gửi trải bài" để mình đọc bài nhé';
        sendBtn.style.display = "unset";
    }
}
//random ra lá bài
function randomCard(){
    let cardNumber = Math.floor(Math.random()*78);
    let isreverse =  Math.floor(Math.random()*2) == 0? "u":"r";
    return "Image/" + cardNumber + isreverse +".jpg";
}
//Kiểm tra lá bài được chọn có duy nhất
function isUniqueCard(cardSrc){
    if (firstCard.src.includes(cardSrc)|| 
        secondCard.src.includes(cardSrc)||
        thirdCard.src.includes(cardSrc)|| 
        forthCard.src.includes(cardSrc)){
        return false
    }
}
//Ẩn lá bài được chọn ở deck of card
function hiddenChoosenCard(element){
    if (forthCard.src.includes('Image/place_holder.JPG')){
        element.classList.add("choosen_card");
        placeCard();
    }
    console.log ('run')
}
//úp bài lên selected card
function placeCard(){
    if (firstCard.src.includes('Image/place_holder.JPG')){
        firstCard.src = 'Image/Backofcard.jpg';
        
        textMessage.querySelectorAll('p')[0].innerHTML = 'Hãy bốc lá bài thứ hai';
        textMessage.querySelectorAll('p')[1].innerHTML = 'Lá bài đại diện cho quá khứ';
        return;
    }
    if (secondCard.src.includes('Image/place_holder.JPG')){
        secondCard.src = 'Image/Backofcard.jpg';
        textMessage.querySelectorAll('p')[0].innerHTML = 'Hãy bốc lá bài tiếp theo';
        textMessage.querySelectorAll('p')[1].innerHTML = 'Lá bài đại diện cho hiện tại';
        return;
    }
    if (thirdCard.src.includes('Image/place_holder.JPG')){
        thirdCard.src = 'Image/Backofcard.jpg';
        textMessage.querySelectorAll('p')[0].innerHTML = 'Hãy bốc lá bài cuối cùng';
        textMessage.querySelectorAll('p')[1].innerHTML = 'Lá bài đại diện cho xu hướng tương lai';
        return;
    }
    forthCard.src = 'Image/Backofcard.jpg'
    textMessage.querySelectorAll('p')[0].innerHTML = 'Hãy lẩm bẩm câu hỏi của bạn lần nữa';
    textMessage.querySelectorAll('p')[1].innerHTML = 'Và lật các lá bài theo thứ tự đã bốc';
}

document.querySelectorAll('.card_in_deck').forEach(item=> {
    item.addEventListener('click', ()=>{
        hiddenChoosenCard(item)})
})

