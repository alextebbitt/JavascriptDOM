// Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un
// enlace, este no me llevará a otra página.

 let documento = document.querySelector("HTML")
 documento.addEventListener('click', removeLink);
 function removeLink(documento) {
     documento.preventDefault();
 } 
//  Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el 
// nombre magic-*.
let replaceImage = document.querySelector(".kg-image").src="./assets/magic-1.gif";


// Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

let paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].addEventListener("click", function () {
        paragraphs[i].style.background = "black";
        paragraphs[i].style.color = "white";

    })
}
// Bloques de article o section: Cambia el color de fondo.

let articleSections = document.querySelectorAll("article")

for (let i = 0; i < articleSections.length; i++) {
    articleSections[i].addEventListener("click", function() {
        articleSections[i].style.background = "red";
    })
}

//Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones 
// siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.
//3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif.


let hooverExercise = document.querySelectorAll("img")
for (let i = 0; i < hooverExercise.length; i++){
    console.log(hooverExercise[i]);
hooverExercise[i].addEventListener("mouseover", function(){
    hooverExercise[i].src="./assets/abracadabra.gif";

})
}
for (let i = 0; i < hooverExercise.length; i++) {
    hooverExercise[i].addEventListener("mouseout", function(){
        hooverExercise[i].src="./assets/codinghorror-app-icon.png";
    } )
}

//3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

let hooverExerciseP = document.querySelectorAll("p");
for (let i = 0; i < hooverExerciseP.length; i++) {
   hooverExerciseP[i].addEventListener("mouseover", function(){
        hooverExerciseP[i].style.background = "pink";
        hooverExerciseP[i].style.color = "purple";
    } )
}

// Bloques de article o section: Color de fondo distinto al de párrafo

let hooverExerciseSections = document.querySelectorAll("article")
console.log('e',hooverExerciseP)
for (let i = 0; i < hooverExerciseSections.length; i++) {
    hooverExerciseSections[i].addEventListener("mouseover", function() {
        hooverExerciseSections[i].style.background = "brown";
    })
}

// Crea una función de nombre getRandom que acepte un array con valores y devuelva uno de 
// ellos de manera aleatoria.

const colors = ['red', 'blue', 'green']


function getRandom(array) {
    const findRandom = array[Math.floor(Math.random()*array.length)];
return findRandom
}



// Utiliza la función creada getRandom para utilizar colores aleatorios de una paleta 
// que hayas escogido de coolors.co en los apartados anteriores.

const paletOfColors= ["aafac8","c7ffed","bbc8ca","b592a0","9c7178"];


for (let i = 0; i < hooverExerciseP.length; i++) {
    hooverExerciseP[i].addEventListener("mouseover", function(){
        hooverExerciseP[i].style.background = getRandom(paletOfColors);
        hooverExerciseP[i].style.color = getRandom(paletOfColors);
    } )
}
// Utiliza la función creada getRandom para utilizar gifs aleatorios en los 
// apartados anteriores.
const randomGifs= 
     ["./assets/magic-1.gif", "./assets/magic-2.gif", "./assets/magic-3.gif", 
     "./assets/magic-4.gif", "./assets/magic-5.gif", "./assets/magic-6.gif"];

     console.log( getRandom(randomGifs))

let hooverExerciseGif = document.querySelectorAll("img");

for (let i = 0; i < hooverExerciseGif.length; i++){

    console.log(hooverExerciseGif[i]);

hooverExerciseGif[i].addEventListener("mouseover", function(){
    //hooverExerciseGif[i].src=getRandom(randomGifs);
   hooverExerciseGif[i].setAttribute("src", getRandom(randomGifs)) // look into setAttribute
})
}

