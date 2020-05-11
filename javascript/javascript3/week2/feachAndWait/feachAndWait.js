
// Fetch some data from an api.

fetch(`http://api.open-notify.org/astros.json`)
  .then(response => response.json())
  .then(data => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 3000);
    });
  })
  .then((data )=> console.log(data));


