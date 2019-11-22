/* When will we be there?? */


const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  let timeInHours;
  let timeInMinutes;
  function travelTimeCalculator(travelInformation){
     timeInHours =  Math.trunc(travelInformation.destinationDistance / travelInformation.speed);
     timeInMinutes = Math.round((((travelInformation.destinationDistance / travelInformation.speed)-timeInHours)*60));
     return console.log (`${timeInHours} hours and ${timeInMinutes} minutes`);

    }

const travelTime = travelTimeCalculator(travelInformation);
   
