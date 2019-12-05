// Difference between median and average

// Average function

const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];
let sum= 0;
let average;
let median; 
let averageAndMedian;

function getAverage(arr) {
  arr.sort()
    for (let i=0; i<arr.length; i++){
        sum += arr[i]
        
    }
average = sum / arr.length

      if (arr.length%2 === 0)  {
        median = arr[arr.length/2] + arr[(arr.length/2)-1]
        median /= 2;
        
      }   else {
          median =arr[(arr.length + 1) / 2 - 1];
          
      }

return averageAndMedian={Average: average, Median: median};

}

let show = getAverage(housePrices);



const priceArray = document.getElementById('housepriceArray');
const result = document.getElementById('answer');

let newPriceArray = document.createElement('p');
newPriceArray.innerText= "[" + housePrices + "]";

priceArray.appendChild(newPriceArray);



result.addEventListener("click",function(){ alert(result.innerText="The Average is : "  +  show.Average + " and"  + " The Median is :" + show.Median)});
