const toDoForm  = document.querySelector(".js-todoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDolist");


const TODOS_LS = "toDos";
let toDos = [];

//google : delete child element mdn
function deleteToDo(event){
    //console.log(event.target);
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
// filter는 해당 함수가 toDos의 모든 items들에게 실행하도록 하여 treu인 item으로 다시 배열 구성
// ex. 클릭하여 제거된 버튼의 부모 요소인 li의 id 값이 3일 경우, 나머지 id 들은 다시 배열 정렬 
    const cleanToDos = toDos.filter(function(toDo){
        //toDo.id 는 integer, li.id 는 string
        console.log(toDo);
        console.log(toDo.id, li.id);
/*필터함수는 각 항목을 확인하면서( 어떻게 확인 할지는 function으로 만들었죠?) return값이 true인 항목만 모아서 반환합니다.

toDos에 6개의 항목이 있다고 가정하면 id가 1부터 6까지 있겠죠?
4번째 삭제버튼을 누르면, 삭제버튼의 parentNode (삭제버튼이 있는 li태그) 의 id값은 4겠죠?

그러면 toDos가 가진 아이템들(6개)을 하나씩 확인하면서 각 아이템의 id와 삭제버튼 (li.id) 의 아이디인 4를 비교해서 return 합니다.
그럼 return 이 총 6번 이루어지는데 이때 리턴값이 false이면 필터함수가 걸러냅니다.
return toDo.id !== parseInt(li.id)
조건식이 toDos의 id와 삭제버튼의 parentNode인 li의 id와 달라야지 true 이므로
하나씩 돌면서 toDos의 id가 4일때 li.id의 id가 4이면 같으므로 false를 리턴합니다.

그러면 id값이 4인 항목만 건너뛰고 cleanToDos 에 5개의 아이템으로 이루어진 배열이 반환되어 할당됩니다.
*/


        return toDo.id != parseInt(li.id);
    });
    //cleanToDos는 지우고 나서 남은애들이 저장되어있음.
    console.log(cleanToDos);
    
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    // JSON.stringify : change object to String 
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

let idNum =0;
function paintToDo(text){
    const li = document.createElement("li");
    li.innerText
    const delBtn = document.createElement("button");
    delBtn.value = "delete";
    delBtn.innerText="❌";
    delBtn.addEventListener("click",deleteToDo);
    const span = document.createElement("span");
    const newId = idNum;
    span.innerHTML = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = idNum;
    toDoList.appendChild(li);
    const toDoObj={
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
    idNum++;
    //console.log(toDoObj);
}
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null){
        //JSON.parse : String to Object
        const parsedToDos = JSON.parse(loadedToDos);
        console.log(parsedToDos);

        //toDo 는 toDos array 안에 있는 각각의 내용을 가져온다는소리 
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}



function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();
    