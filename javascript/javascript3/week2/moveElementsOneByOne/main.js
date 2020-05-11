// translate one by one

const translateOneByOne = () => {
  moveElement(document.getElementById("red"), {
    x: 20,
    y: 300
  })
    .then(() => {
      console.log("Element has been moved");

      return moveElement(document.getElementById("green"), {
        x: 400,
        y: 300
      });
    })

    .then(() => {
      console.log("Element has been moved");
      return moveElement(document.getElementById("blue"), {
        x: 400,
        y: 20
      });
    })

    .then(() => {
      console.log("Element has been moved");
    })
    .catch(() => console.log("Error"));
};

translateOneByOne();
