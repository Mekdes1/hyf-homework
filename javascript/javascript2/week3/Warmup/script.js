
const textIs = document.getElementById("text1");
const clickButton = document.getElementById("button1");
const locationButton = document.getElementById("buttonLog");
const page = document.querySelector("body");

const calledAfter = () => {
  setTimeout(() => {
    console.log("Called after 5 seconds");
  }, 2500);
}; // Log out the text Called after 5 seconds 2.5 seconds after the script is loaded.

const logString = (delay, stringToLog) => {
  setTimeout(() => {
    console.log(stringToLog);
  }, delay * 1000);
}; //  Function that takes 2 parameters: delay and stringToLog.Logging out stringToLog after delay seconds.

logString(4, "Logging string after 4 seconds");
logString(3, "Logging string after 3 seconds");
logString(5, "Logging string after 5 seconds");

clickButton.addEventListener("click", calledAfter); //  When clicking this button calledAfter function runs

const earthLogger = () => {
  console.log("Earth");
};

const saturnLogger = () => {
  console.log("Saturn");
};

const planetLogFunction = logPlanet => logPlanet(); // call the provided parameter function

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

const getLocation = () => {
  const location = position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    console.log(
      `You are in Latitude : ${latitude} and Longitude : ${longitude}`
    );
  };

  const error = () => {
    console.log("Unable to retrieve your location");
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(location);
  } else {
    error();
  }
}; //  location (latitude, longitude) of the user should be logged out using this browser api

locationButton.addEventListener("click", getLocation);

 function initMap () {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 55.8, lng: 12.58},
      zoom: 8
    });

    const marker = new google.maps.Marker({

        position:  {lat: 55.8, lng: 12.58},

        map: map
  } );
} 

const runAfterDelay = (delay, callback) => {
  setTimeout(() => {
    callback();
  }, delay * 1000);
}; // When called the function should wait delay seconds and then call the provided callback function.

runAfterDelay(2, func => {
  console.log("This function will run after 2 seconds");
});

const checkDoubleClick = () => console.log("double click!"); // If a double click has been detected, log out the text: "double click!"

page.addEventListener("dblclick", checkDoubleClick);

const funyJoke = () => console.log("log out funy joke");
const badJoke = () => console.log("log bad joke");
const jokeCreator = (shouldTellFunnyJoke, logFunnyJoke, logBadJoke) => {
  if (shouldTellFunnyJoke === true) {
    logFunnyJoke();
  } else {
    logBadJoke();
  }
}; // If you set tellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke. And vice versa.

jokeCreator(true, funyJoke, badJoke);

const itemArray = [
  function firstFunc() {
    console.log("Log first function");
  },
  function secondFunc() {
    console.log("Log second function");
  },
  function thirdFunc() {
    console.log("Log third function");
  }
];

itemArray.forEach(item => item()); // Iterate through the array and call all the functions.

 const specalFunc = ()=>console.log('Log the first function with const');

 function normalFunc() {
    console.log('Log the first  normally created function');

}    // Create a function as a const and try creating a function normally. Call both functions


specalFunc();
normalFunc();

/* const specalFunc = () => {
  function normalFunc() {
    console.log("Log normally created function");
  }

  console.log("Log function with const");
  normalFunc();
}; // Create a function as a const and try creating a function normally. Call both functions.

specalFunc(); */


 
const objectFunc = {keyFunc:() => console.log('Im a function inside an object')}; // an object that has a key whose value is a function.

=======
const textIs = document.getElementById("text1");
const clickButton = document.getElementById("button1");
const locationButton = document.getElementById("buttonLog");
const page = document.querySelector("body");

const calledAfter = () => {
  setTimeout(() => {
    console.log("Called after 5 seconds");
  }, 2500);
}; // Log out the text Called after 5 seconds 2.5 seconds after the script is loaded.

const logString = (delay, stringToLog) => {
  setTimeout(() => {
    console.log(stringToLog);
  }, delay * 1000);
}; //  Function that takes 2 parameters: delay and stringToLog.Logging out stringToLog after delay seconds.

logString(4, "Logging string after 4 seconds");
logString(3, "Logging string after 3 seconds");
logString(5, "Logging string after 5 seconds");

clickButton.addEventListener("click", calledAfter); //  When clicking this button calledAfter function runs

const earthLogger = () => {
  console.log("Earth");
};

const saturnLogger = () => {
  console.log("Saturn");
};

const planetLogFunction = logPlanet => logPlanet(); // call the provided parameter function

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

const getLocation = () => {
  const location = position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    console.log(
      `You are in Latitude : ${latitude} and Longitude : ${longitude}`
    );
  };

  const error = () => {
    console.log("Unable to retrieve your location");
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(location);
  } else {
    error();
  }
}; //  location (latitude, longitude) of the user should be logged out using this browser api

locationButton.addEventListener("click", getLocation);

/* function initMap () {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 55.8, lng: 12.58},
      zoom: 8
    });

    const marker = new google.maps.Marker({

        position:  {lat: 55.8, lng: 12.58},

        map: map
  } );
} */

const runAfterDelay = (delay, callback) => {
  setTimeout(() => {
    callback();
  }, delay * 1000);
}; // When called the function should wait delay seconds and then call the provided callback function.

runAfterDelay(2, func => {
  console.log("This function will run after 2 seconds");
});

const checkDoubleClick = () => console.log("double click!"); // If a double click has been detected, log out the text: "double click!"

page.addEventListener("dblclick", checkDoubleClick);

const funyJoke = () => console.log("log out funy joke");
const badJoke = () => console.log("log bad joke");
const jokeCreator = (shouldTellFunnyJoke, logFunnyJoke, logBadJoke) => {
  if (shouldTellFunnyJoke === true) {
    logFunnyJoke();
  } else {
    logBadJoke();
  }
}; // If you set tellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke. And vice versa.

jokeCreator(true, funyJoke, badJoke);

const itemArray = [
  function firstFunc() {
    console.log("Log first function");
  },
  function secondFunc() {
    console.log("Log second function");
  },
  function thirdFunc() {
    console.log("Log third function");
  }
];

itemArray.forEach(item => item()); // Iterate through the array and call all the functions.

 const specalFunc = ()=>console.log('Log the first function with const');

 function normalFunc() {
    console.log('Log the first  normally created function');

}    // Create a function as a const and try creating a function normally. Call both functions


specalFunc();
normalFunc();

/* const specalFunc = () => {
  function normalFunc() {
    console.log("Log normally created function");
  }

  console.log("Log function with const");
  normalFunc();
}; // Create a function as a const and try creating a function normally. Call both functions.

specalFunc(); */


 
const objectFunc = {keyFunc:() => console.log('Im a function inside an object')}; // an object that has a key whose value is a function.


objectFunc.keyFunc(); // calling a function inside an object