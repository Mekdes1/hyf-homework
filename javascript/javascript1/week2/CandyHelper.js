
/* Candy helper optional */
const Sweet = 0.5;
const Chocolate = 0.7;
const Toffe = 1.1;
const Chewing_gum = 0.03;
let totalPrice;
let boughtCandyPrice = [2,1,5]
let amountToSpend = Math.random() * 100; 

function addCandy(candyType,weight) 
{

    totalPrice = candyType * weight
    boughtCandyPrice.push(totalPrice)
    return boughtCandyPrice
}
addCandy(Sweet,80);
console .log(boughtCandyPrice);


function canBuyMoreCandy() 
{
    
shouldBuyCandy = 0;
    i = 0;
    while (i < boughtCandyPrice .length) 
    {
        shouldBuyCandy += boughtCandyPrice[i];
        i++;
    } 
    if (shouldBuyCandy < amountToSpend) 
    {
        console .log ("You can buy more, so please do!");
        return true
    } else 

    console .log("Enough candy for you!")
    return false

}


canBuyMoreCandy();
