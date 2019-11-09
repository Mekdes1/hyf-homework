// freecodecamp username: mekdes-hatamu


//Age-ify (A future age calculator)

let yearOfBirth = 1996;
let yearFuture = 2050;
let age = yearFuture - yearOfBirth;

console .log ("You will be " +  age  + " years old in " + yearFuture + ".");

// Goodboy-Oldboy (A dog age calculator)

let dogYearOfBirth = 2017;
let dogYearFuture = 2027;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
    console .log(" Your dog will be " + dogYear * 7  + " dog years old in " + dogYearFuture + ".");
} else {
    console .log(" Your dog will be " + dogYear  + " Human years old in " + dogYearFuture + ".");
    }

// Housey pricey (A house price estimator) :peter's price 

let VolumeInMeters = 8 * 10 * 10;
let gardenSizeInM2 = 100;
let housePrice =  VolumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if ( housePrice < 2500000) {
    console .log (" Peter you are paying too much, you are paying " + (2500000 - housePrice) + " times more than the actuall price!!! ");
}  else if( 2500000 == housePrice) {
    console .log( "well done!")
} else { 
    console .log (" you are paying too little.");
}

// Housey pricey (A house price estimator) :Julia's price 

let housVolumeInMeters = 5 * 11 * 8;
let housGardenSizeInM2 =70;
let houseOfPrice = housVolumeInMeters * 2.5 * 1000 + housGardenSizeInM2 * 300;

if ( houseOfPrice < 1000000) {
    console .log (" Julia you are paying too much ");
} else if( 1000000 == houseOfPrice) {
    console .log( "well done!")
} else { 
    console .log (" you are paying too little." + " you are paying " + (houseOfPrice - 1000000) + " times less!!! ");
}

// Ez Namey (Startup name generator) Optional



let firstWords = ["Easy","Awsome","Simple","Cool","Corporate","Company","World","Smart","Fantastic","Creative"]
let secondWords = ["fun","free","acceesable","collection","adventure","constraction","developer","software","zone","ideas"]
let startupName = firstWords[Math.floor(Math.random()*firstWords.length)] + " " + secondWords[Math.floor(Math.random()*secondWords.length)];

console .log("start up name:\n" + startupName + " " + "and\n" +  "character length:\n "+ startupName .length );








