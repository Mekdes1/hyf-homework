const inputis = document.getElementById('userName');
const forButton = document.getElementById('clickButton');
const newName = document.getElementById('clickButton2');
const result = document.getElementById('newSpiritName');
const result2= document.getElementById('newSpiritName2');

const names=["Wolf-Man","Star","cat","Yello-butterfly","Dark-Moon","The fullmoon wolf","The crying butterfly","The lion king","The singing cat","The yello star"];
let random = names[Math.floor(Math.random()*names.length)];
let random2=   names[Math.floor(Math.random()*names.length)];        

let name;

function spiritAnimalName() {
    name = inputis.value
    if (inputis.value === ""){
        result.innerText= "Please input your name";
    } else {

   result.innerText = name + " - " + random;
    
   }
   
   return
}            // creats sprit animal name for the first button

function newSpiritName() {
    name = inputis.value

    if(inputis.value === ""){
         result2.innerText ="Please input your name";
    }   else {
         
        result2.innerText = "your new spirit animal name is" + " - " + random2;
         

    } 
    
     return
}                 // creats sprit animal name for the second button

forButton.addEventListener("click",spiritAnimalName);
newName.addEventListener("click",newSpiritName);