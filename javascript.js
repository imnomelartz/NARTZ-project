const popup = document.getElementsByClassName(`chat-popup`)[0];
const msgbtn = document.querySelector(`msg-bttn`);
const submitBtn = document.getElementsByClassName(`submit`);
const chatArea = document.getElementsByClassName(`chat-area`)[0];
const inputE = document.getElementById(`inputt`);
console.log(chatArea)

//send msg

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



 /* Demo purposes only */
  // $(".hover").mouseleave(
  //   function () {
  //     $(this).removeClass("hover");
  //   }
  // );



// parallax 

const translate = document.querySelectorAll(".translate");
const big_title = document.getElementsByClassName(".big-title");
const header = document.querySelector("header")
const shadow = document.querySelector(".shadow")

let header_height = header.offsetHeight;

window.addEventListener('scroll', () => {
let scroll = window.pageXOffset;

translate.forEach(element => {
let speed = element.dataset.speed;
element.style.transform = `translateY(${scroll * speed}px)`;
})
shadow.style.height = `${scroll * 0.5 + 350}px`;
})



function smoothScroll(target,duration){
var target = document.querySelector(target);
var targetPosition = target.getBoundingClientRect().top;
var startPosition = window.pageYOffset;
var distance = targetPosition - startPosition;
var startTime = null;

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed,startPosition,distance,duration)
        window.scrollTo(0,run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if(t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t* (t - 2) - 1) + b;
    }


    requestAnimationFrame(animation);
}


     
var section1 = document.querySelector('.section1');


section1.addEventListener("click" , function(){
    smoothScroll(`.section2`, 1000)
    console.log(section1)
});








