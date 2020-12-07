const calculateBmi = (height: number, weight: number) => {
  const heightSquare = (height / 100) ** 2;
  const result = weight / heightSquare;

  if (result > 16 && result < 18.5) {
    return "Underweight";
  } else if (result > 18.5 && result < 25) {
    return "Normal";
  } else if (result > 25 && result < 30) {
    return "Overweight";
  } else if (result >= 30) {
    return "Obese";
  } else {
    return "Error";
  }
};

console.log(calculateBmi(180, 74));
