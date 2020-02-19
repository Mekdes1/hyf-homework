// Circle calculator

class circle {
  constructor(radius) {
    this.radius = radius;
  }

  getDiameter() {
    const diameter = this.radius * 2;
    console.log(`Diameter : ${diameter}`);
    return diameter;
  }

  getCircmference() {
    const circmference = (Math.PI * this.radius * 2).toFixed(2);
    console.log(`Circmference : ${circmference}`);
    return circmference;
  }
  getArea() {
    const radiusIs = this.radius;
    const area = radiusIs * radiusIs;
    console.log(`Area : ${area}`);
    return area;
  }
}

const circleIs = new circle(10);
circleIs.getDiameter();
circleIs.getCircmference();
circleIs.getArea();
