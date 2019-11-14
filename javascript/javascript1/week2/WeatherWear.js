/* Weather wear */

let recommandation;
function weatherWear(temprature){
     if(temprature <= 6) {
        recommandation = "its very cold. go for winter cloth";
        return recommandation
    } else if 
        (temprature >6 && temprature < 18) { 
        recommandation ="put on some light jacket";
        return recommandation
} else if 
 (temprature >18 && temprature <27 ) {
     recommandation = "it is getting warm put some light cloth on";

} else

    recommandation = "it is very warm out there";

}

weatherWear(25);
console .log(recommandation);
