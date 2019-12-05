const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium']; 


function findShortestWord(arr){  

  let shortestWord = arr[0];

for(let i = 1 ; i < arr.length ; i++) {

 if(shortestWord.length > arr[i].length) {

      shortestWord = arr[i];
      
    } 
   
  }
  return shortestWord;
};


const phar = document.getElementById('firstPhar');
const array= document.getElementById('nameArray');
const phar2 = document.getElementById('secondPhar');
const shortWord = findShortestWord(danishWords);
const wordAnswer = document.getElementById('answer');


let newPhar = document.createElement('p');
newPhar.innerText="Here is the list of elements";

phar.appendChild(newPhar);

let newArray = document.createElement('p');
newArray.innerText = "[" + danishWords + "]";

array.appendChild(newArray);

let newPhar2 = document.createElement('p');
newPhar2.innerText = " The shortest word is :";

phar2.appendChild(newPhar2);



let newAnswer = document.createElement('h1');
newAnswer.innerText = shortWord;


wordAnswer.appendChild(newAnswer);

