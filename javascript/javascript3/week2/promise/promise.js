// Promise that resolves after set time

const resolveAfter = seconds => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`I am called asynchronously after ${seconds} seconds`);
    }, seconds * 1000);
  }).then(result => console.log(result));
};

resolveAfter(2);

// Rewrite setTime

const setTimeoutPromise = resolveAfter => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Called after ${resolveAfter} seconds`);
    }, resolveAfter * 1000);
  });
};

setTimeoutPromise(3).then(result => console.log(result));

// Rewrite geoLocaton
const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const currentLocation = {
          longitude: position.coords.longitude,

          latitude: position.coords.latitude
        };
        resolve(currentLocation);
      },

      logError => {
        error = {

         message: 'unable to retrive location'
        };

        reject(error);
      }
    );
  });
}

getCurrentLocation().then((result)=>console.log(result)).catch((result)=>console.log(result));