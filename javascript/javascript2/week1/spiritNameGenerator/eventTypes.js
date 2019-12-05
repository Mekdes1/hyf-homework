const select = document.getElementById('select-event');
const button= document.getElementById('generator-button');
const input = document.getElementById('User-name');
const newName= document.getElementById('showName');

const names=["Wolf-Man","Star","cat","Yello-butterfly","Dark-Moon","The fullmoon wolf","The crying butterfly","The lion king","The singing cat","The yello star"];
let random = names[Math.floor(Math.random()*names.length)];
let result;
let name;

function getName(){
    
    name = input.value;
    if(input.value === ""){
        result= showName.innerText= "Please input your name";

    } else {

    result = showName.innerText = name + " - " + random;
}
 return
}            // function to display spirit animal name


button.addEventListener("dblclick",function(){
    
    if(select.value==="none"|| select.value==="mouseout" || select.value === "hoverOnInput"){
        event.stopPropagation();
    } else {
       return getName();
    }
    
    } ); // only works when doubleClick else event stops 

    input.addEventListener("mouseout",function(){
    
        if(select.value==="none"|| select.value==="doubleClick" || select.value === "hoverOnInput"){
            event.stopPropagation();
        } else {
           return getName();
        }
        
        } ); // only works when mouseout else event stops

        
    input.addEventListener("mouseover",function(){
    
        if(select.value==="none"|| select.value==="doubleClick" || select.value === "mouseout"){
            event.stopPropagation();
        } else {
           return getName();
        }
        
        } ); // only works when mouseovers else event stops
    
    