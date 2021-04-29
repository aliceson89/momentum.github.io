/*JS DOM*/
//
//HTMLDocument { location: [Getter/Setter] }

const title = document.getElementById("title");
//id
//const test = document.querySelector("#title");
//class
//const test = document.querySelector(".title");
//console.log(title)
//console.error("fff");


// we can manupulate with JavaScript with DOM
//title.innerHTML= "Hi! From JS :";
title.style.color = "red";
//console.dir(title);
console.dir(document);

//Page Title 이 바뀜
document.title = "I love you";

//form or link 만들때 유용함

function handleResize1(){
    
    console.log("I have been resized");
}
function handleResize2(event){
    console.log(event)
    console.log("I have been resized");
}

//window.addEventListener("resize",handleResize()): calling function immediately !
//window.addEventListener("resize",handleResize) : calling when I resize it
window.addEventListener("resize",handleResize1);
window.addEventListener("resize",handleResize2);


/* change title color
function handleClick(){
    title.style.color="blue";
}
title.addEventListener("click",handleClick);
*/

if ("aaaa"==="bbbb")
if(10 > 5){
    console.log("right")
}else{
    console.log("wrong")
}


if ("aaa" === "aaa"){
    console.log("right")
}else if("aaa" === "bbb"){
    console.log("wrong")
}else{
    console.log("right")

}
/* condition
true && true = true;
false && true = false;
false && false = false;
true && false = false;


true || true = true;
false || true = true;
false || false = false;
true || false = true;
*/


/*
const age = prompt("how old are you");

if ( age >= 18 && age <=21){
    console.log("you can drink but you should not");
}else if ( age > 21){
    console.log("Go ahead");
}else{
    console.log("Don't drink");
}
*/


/* color change with action
const BASE_COLOR="white"
const OTHER_COLOR="blue"

function handleClick(){
    const currentColor = title.style.color;
    console.log(currentColor);
    if ( currentColor == BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }else{
        title.style.color = BASE_COLOR;
    }
}
function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click",handleClick);
    title.addEventListener("mouseenter",handleClick);
    //how to find event : https://developer.mozilla.org/ko/docs/Web/Events
    // DOC : https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events
}

init();

function handleOffline(){
    console.log("Your network is offline");
}

function handleOnline(){
    console.log("Your are back");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
*/


const CLICKED_CLASS = "clicked";

//add class way 1
function handleClick2(){
    const currentClass = title.className;
    console.log(currentClass);
    if(currentClass !== CLICKED_CLASS){
        title.className = CLICKED_CLASS
    }else{
        title.className = "";
    }
}
//add class way 2
function handleClick3(){
    const hasClass = title.classList.contains(CLICKED_CLASS);
    console.log(hasClass);
    if(!hasClass){
        title.classList.add(CLICKED_CLASS);
    }else{
        title.classList.remove(CLICKED_CLASS);
    }
}
//add class way 3
function handleClick4(){
    title.classList.toggle(CLICKED_CLASS);
}

function init2(){
    //title.addEventListener("click",handleClick2);
    //title.addEventListener("click",handleClick3);
    title.addEventListener("click",handleClick4);
}
init2();