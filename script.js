/* MENU MOBILE */

function toggleMenu(){

const navLinks = document.getElementById("navLinks");

navLinks.classList.toggle("active");

}


/* cerrar menu al hacer click */

document.querySelectorAll(".nav-links a").forEach(link => {

link.addEventListener("click", () => {

document.getElementById("navLinks").classList.remove("active");

});

});


/* typing */

const text="Desarrolladora Web";

let i=0;

function typing(){

if(i<text.length){

document.querySelector(".typing").innerHTML+=text.charAt(i);

i++;

setTimeout(typing,50);

}

}

typing();


/* CARRUSEL */

let courseIndex=0;

const courses=document.querySelectorAll(".course-slide");
const dots=document.querySelectorAll(".carousel-dots span");

function showCourse(index){

courses.forEach(course=>course.classList.remove("active"));
dots.forEach(dot=>dot.classList.remove("active"));

courses[index].classList.add("active");
dots[index].classList.add("active");

}

function moveCourse(direction){

courseIndex+=direction;

if(courseIndex<0)
courseIndex=courses.length-1;

if(courseIndex>=courses.length)
courseIndex=0;

showCourse(courseIndex);

}

function goToCourse(index){

courseIndex=index;

showCourse(courseIndex);

}


/* autoplay */

setInterval(()=>{

moveCourse(1);

},5000);


showCourse(courseIndex);



const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01010101010101010101";
const fontSize = 16;

const columns = canvas.width / fontSize;

const drops = [];

for(let i = 0; i < columns; i++){

drops[i] = 1;

}

function drawMatrix(){

ctx.fillStyle = "rgba(2,6,23,0.08)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle = "#3b82f6"; // azul moderno
ctx.font = fontSize + "px monospace";

for(let i = 0; i < drops.length; i++){

const text = letters.charAt(
Math.floor(Math.random() * letters.length)
);

ctx.fillText(text, i * fontSize, drops[i] * fontSize);

if(drops[i] * fontSize > canvas.height && Math.random() > 0.975){

drops[i] = 0;

}

drops[i]++;

}

}

setInterval(drawMatrix, 35);


window.addEventListener("resize", () => {

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

});


