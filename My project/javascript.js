const popup = document.getElementsByClassName(`chat-popup`)[0];
const msgbtn = document.querySelector(`msg-bttn`);
const submitBtn = document.getElementsByClassName(`submit`);
const chatArea = document.getElementsByClassName(`chat-area`)[0];
const inputE = document.querySelector(`input`);
console.log(chatArea)

//sen msg

submitBtn[0].addEventListener(`click`, ()=>{
    let userInput = inputE.value;
    console.log(userInput)
    
    let temp = `<div class="out-msg">
    <span class="my-msg">${userInput}</span>
    <img src="./insta-pic-logo.jpg" class="income-msg">
    </div>`;
    chatArea.insertAdjacentHTML("beforeend", temp);
    inputE.value=``;
})


//chat popup

let isShown = false

function myForm(){
    if(isShown){
    popup.style.display = `flex`
    }
    else{
        popup.style.display = `none`
    }
isShown = !isShown
}
console.log(popup)