function Submit() {
    alert("Your comment has succesfully sent, we will contact you later :)");
}

const avengers = "./assets/img/TEAM/Superhero Avatars/Avengers";

const ironman ="./assets/img/TEAM/Superhero Avatars/Iron Man"

const moreBtn = document.getElementById("more-button");

const subNav = document.getElementById("sub-nav");

const leftchangeBtn = document.getElementById("leftchangeBtn");

const rightchangeBtn = document.getElementById("rightchangeBtn");

const avatar = document.getElementById("avatar");

var subNavOpen = false;

const source=[
    // ironman
    `${avengers}/Iron Man-01.png`,
    `${ironman}/iron-man-01.png`,
    `${ironman}/iron-man-02.png`,
    `${ironman}/iron-man-03.png`,
    `${ironman}/iron-man-04.png`,
    `${ironman}/iron-man-05.png`,
    // avengers
    `${avengers}/War Machine-01.png`,
    `${avengers}/Captain America-01.png`,
    `${avengers}/Black Widow-01.png`,
    `${avengers}/Nick Fury-01.png`,
    `${avengers}/Hulk-01.png`,
    `${avengers}/Thor-01.png`,
    `${avengers}/Giant Man-01.png`,
    `${avengers}/Loki-01.png`,
    `${avengers}/Hawkeye-01.png`,
    `${avengers}/Agent Coulson-01.png`,
]

var test=0;

moreBtn.onclick = function(){
    if (subNavOpen===false) {
        open()
        subNavOpen=true;
        console.log("sub Nav opened")
    } else {
        close()
        subNavOpen=false;
        console.log("sub Nav closed")
    }
}

document.getElementById('date-button').onclick = function() {
    document.getElementById('date').innerHTML = Date();
};   

document.getElementById('date').onclick = function() {
    document.getElementById('date').innerHTML ='';
}; 

const open = function(){
    subNav.classList.add('active');
}

const close = function(){
    subNav.classList.remove('active');
}

var index = 0;



leftchangeBtn.onclick=function(){
    console.log('Hello left');
    if (index === 0) {index = source.length-1} else {--index};
    console.log(index);
    render(index);
}

rightchangeBtn.onclick=function(){
    console.log('Hello right');
    if (index === source.length-1) {index = 0} else {++index};
    console.log(index);
    render(index);
}

const render = function(e){
    avatar.src = source[e];
}   
