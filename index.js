function bmiCalculator(weight, height) {
  var bmi = weight / (height * height);

  bmi = Math.round(bmi);

  var interpretation = "";

  if (bmi < 18.5) {
    interpretation = "Your BMI is " + bmi + ", so you are underweight.";
  }
  if (bmi >= 18.5 && bmi <= 24.9) {
    interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
  }
  if (bmi > 24.9) {
    interpretation = "Your BMI is " + bmi + ", so you are overweight.";
  }
  return interpretation;
}

var b = bmiCalculator(65, 1.8);
console.log(b);
