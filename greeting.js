//querySelector 는 가장 첫번째 매치되는 아이템을 가져온다
//querySelectorAll 은 doc 의 모든 것을 가져온다, array 저장해야함

const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greetings");


const USER_LS = "currentUser",
SHOWING_CN="showing";



function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    //event happened in form, enter 이벤트가 발생했을때 form 에 넣는 데이터가 사라지지 않게 함 
    event.preventDefault();
    // placeholder 내용 변경가능
    // input.placeholder = ""
    // input 에 들어가는 value 변경가능
    // input.value = ""
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
    form.classList.add(SHOWING_CN);
}

function askForName(){

    form.addEventListener("submit",handleSubmit);
    
}

function paintGreeting(text){
    greeting.classList.remove(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;

}


function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    console.log(currentUser);
    // case : there is no user
    if (currentUser === null){
        console.log("no user!!");
        askForName();
        

    // case : there is user
    }else{
        console.log("User exisiting");
        paintGreeting(currentUser);
        
    }
}

function init(){
    loadName();
}

init();