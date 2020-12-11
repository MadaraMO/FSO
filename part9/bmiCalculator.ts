export const calculateBmi = (height: number, weight: number): string => {
  const heightSquare = (height / 100) ** 2;
  const result = weight / heightSquare;

  if (result > 16 && result < 18.5) {
    return "Underweight";
  } else if (result > 18.5 && result < 25) {
    return "Normal";
  } else if (result > 25 && result < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
};

  // else {
  //   // bija kļūda "Function lacks ending return statement",
  //   throw new Error("Malformatted parameters");
  // }


// const parseBmi = (args: string[]) => {
//   if (args.length < 4) throw new Error("Not enough arguments");
//   if (args.length > 4) throw new Error("Too many arguments");

//   if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
//     return {
//       height: Number(args[2]),
//       weight: Number(args[3]),
//     };
//   } else {
//     throw new Error("Provided values were not numbers!");
//   }
// };

// if (process.argv.includes("calculateBmi"))
//   try {
//     const { height, weight } = parseBmi(process.argv);
//     console.log(calculateBmi(height, weight));
//   } catch (e) {
//     console.log("Error, something bad happened, message: ", e.message);
//   }

// const { height, weight } = parseBmi(process.argv);
// console.log(calculateBmi(height, weight));
