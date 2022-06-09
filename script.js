

const btn1 = document.getElementById("home");
const btn2 = document.getElementById("tools");

const btn3 = document.getElementById("home-text");
const btn4 = document.getElementById("tools-text");

btn1.onclick = function(){
    btn3.style.display ="block";
    btn4.style.display = "none";
}

btn2.onclick = function(){
    btn3.style.display ="none";
    btn4.style.display = "block";
}