
let numbers =[1,2,3,4];

const listOfNumbers = document.getElementById('list');
const resultIs= document.getElementById('result');
const titleIs = document.getElementById('title');
const filterdArray = document.getElementById('newList');

titleIs.innerText = `Doubling of odd number `;
listOfNumbers.innerText = `The given array is : [ ${numbers} ]`;


newArrayFilter = numbers.filter(item  =>{
    if (item% 2!==0) {
        return true
    } else {
    return false
    }
});

filterdArray.innerText = ` Array after filter is : [ ${newArrayFilter} ]`


newArray = newArrayFilter.map(item => item*2)

    resultIs.innerText=  `The answer is : [ ${newArray} ] `;
    




