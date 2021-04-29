const body = document.querySelector("body");
const IMG_NUMBER = 5;
/*function handleImgLoad(){
    console.log("finished loading");
}*/

function paintImage(imgNumber){
    const image = new Image();
    image.src = `Images/${imgNumber +1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
    //API 이용할때는 아래 이벤트 리스너 쓰기
    //image.addEventListener("loadend",handleImgLoad);

}
function genRandom(){
    //Math.ceil
    const number = Math.floor(Math.random()*IMG_NUMBER);
    
    return number;
}
function init(){
    const randomNum = genRandom();
    console.log(randomNum);
    paintImage(randomNum);
}

init();