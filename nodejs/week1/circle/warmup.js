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

  getCircumference() {
    const circumference = (Math.PI * this.radius * 2).toFixed(2);
    console.log(`Circumference : ${circumference}`);
    return circumference;
  }
  getArea() {
    const radiusIs = this.radius;
    const area = Math.PI * (radiusIs * radiusIs);
    console.log(`Area : ${area}`);
    return area;
  }
}

const circleIs = new circle(10);
circleIs.getDiameter();
circleIs.getCircumference();
circleIs.getArea();
