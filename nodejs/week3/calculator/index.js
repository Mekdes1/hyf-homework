const express = require("express");
const app = express();
const validator = require("validator");

app.use(express.json());
app.post("/calculator", (req, res) => {
  const method = req.body.method;
  const queryArray = Object.values(req.query);
  const merged = [].concat.apply([], queryArray);
  queryArrayNum = merged.map(Number);

  console.log(method);
  if (method === "addition") {
    const sum = queryArrayNum.reduce((total, num) => total + num);
    res.send(` The sum of the numbers is :  ${sum}`);
  } else if (method === "substraction") {
    const diffrence = queryArrayNum.reduce((total, num) => total + num);
    res.send(` The diffrence of the numbers is : ${diffrence}`);
  } else if (method === "multiplication") {
    const multiple = queryArrayNum.reduce((total, num) => total * num);
    res.send(` The multiple of the numbers is : ${multiple}`);
  } else if (method === "division") {
    const quotient = queryArrayNum.reduce((total, num) => total / num);
    res.send(` The quotient of the numbers is : ${quotient}`);
  } else {
    res.send(" Please make sure you are using the correct method");
  }
});

const port = 3000;
app.listen(port, () => console.log(`Server runing on port:${port}`));
