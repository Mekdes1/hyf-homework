
/* CactusIO-interactive (Smart phone usage app) optional */

/* Adding an activity */ 

let activities = [];

let today  = new Date();

const date = today.toLocaleDateString("en-US");

function addActivity(date, activity,duration){
  activities.push({date,activity,duration});
  return activities
}


addActivity(date, 'Instagram', 100);
addActivity(date, 'Youtube', 100);

console.log(activities);

/* function for total duration */

let durationTotal = 0;
function totalDuration(activites) {
  for (let i=0; i<activites.length;i++){
    durationTotal += activities[i].duration
  } 
  return durationTotal;
}
let durationsInTotal = totalDuration(activities);


/* showStatus */ 

const maxlimit = 260;
let logOut;
function showStatus(activities) {
   if (durationsInTotal > maxlimit) {
      logOut = "You have reached your limit, no more smartphoning for you!";
    } else if (activities.length == 0) {
    logOut = "Add some activites before calling showStatus";
    return logOut
  } else {
    logOut = " you have added " + " " + activities.length + " activities." + " They mount to " + durationsInTotal + " min of usage "; 
    return logOut 
  }
  
}

showStatus(activities);
console.log(logOut);

