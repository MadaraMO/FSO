const calculateBmi = (height: number, weight: number): string => {
  const heightSquare = (height / 100) ** 2;
  const result = weight / heightSquare;

  if (result > 16 && result < 18.5) {
    return "Underweight";
  }
  if (result > 18.5 && result < 25) {
    return "Normal";
  }
  if (result > 25 && result < 30) {
    return "Overweight";
  }
  if (result >= 30) {
    return "Obese";
  }
};
// ....atkārtošu exerciseCalculator.ts parsēšanas shēmu
const height = Number(process.argv[2]);
const weight = Number(process.argv[3]);

console.log(calculateBmi(height, weight));
