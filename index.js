const yeon = {
    name: "jeongyeon",
    age: 23
}

const hiphop = {
    freestyle: function (name) {
        return `say yo ~ ${name}`
    },
    album: function (name){
        if (name == "esens") {
            return `${name} : 에넥도트`;
        }else if(name == "swings"){
            return `${name} : upgrade`;
        } else if (name == "dok2") {
            return `${name} : young king young boss`;
        }
    }
}
const swings = hiphop.album("swings");

/*
const title = document.getElementById("title");
console.dir(title);
const hello = document.querySelector("#title");
*/
//title 이 객체가 된다는건 뭐냐 

const title = document.querySelector("#title");
const BASE_COLOR = "red"

function handleResize() {
    console.log("I have been resize");
}

//window.addEventListener("resize", handleResize);
/*
function handleClick() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR) {
        title.style.color = "#74b9ff";
    } else {
        title.style.color = BASE_COLOR;
    }
}
function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}
init();
*/
const CLICKED_CLASS = "clicked";
function handleClick() {
    title.classList.toggle(CLICKED_CLASS);
}

function init() {
    //title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}
init();