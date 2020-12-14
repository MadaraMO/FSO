interface ExerciseInfo {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

// šī gan ir mana daļa, esmu pārdēvējusi tikai exercises uz hours
export const calculateExercises = (
  hours: number[],
  target: number
): ExerciseInfo => {
  const activeDays = hours.filter((hour: number) => hour > 0);

  const getAverage = (arr: number[]) =>
    arr.reduce((p, c) => p + c, 0) / arr.length;
  const average = getAverage(hours);

  // tuple
  const calculateRating = (): [number, string] => {
    if (average >= target) {
      return [3, "Very good!"];
    } else if (average * 1.25 >= target) {
      return [2, "Not too bad"];
    } else {
      return [1, "You can do better"];
    }
  };

  const rating = calculateRating();

  const result = {
    periodLength: hours.length,
    trainingDays: activeDays.length,
    success: average >= target,
    rating: rating[0],
    ratingDescription: rating[1],
    target,
    average,
  };

  return result;
};



// interface TrainingHours {
//   target: number;
//   hours: number[];
// }

// šīs divas rindas vispār visiem kopētas no FSO.
// args būs masīvs ar ... simbolu virkni, atgriezīsim augstākminēto interface
// throw neesmu apguvusi, bet redzams - ja args simbolu virkne ir mazāka par prasīto, tiek izmesta kļūda
// const parseHours = (args: Array<string>): TrainingHours => {
//   if (args.length < 4) throw new Error("Not enough arguments");

//   // nav mans, nebūtu izdomājusi, slice? runa ir par masīvu, jā.
//   // šajā zonā es arī kāros, jo man nekādi neizdevās realizēt
//   // const thisorthat = process.argv[3] kā izmantojamu vērtību
//   const trainingHours = process.argv.slice(3);

//   // arī nav mans, bet šeit mēs iekārtojam mūsu target vietu rindā,
//   // jo šeit var tā vienkārši - [2] ? hm
//   const target = args[2];

//   // pārkopēts no FSO - daudziem tā. isNan? google help now, to kaut kā varētu saprast,
//   // bet manai acij tas izskatās pēc cimperlīga veida, kā apstiprināt to, ka target ir number
//   if (
//     !isNaN(Number(target)) &&
//     // par every nebūtu iedomājusies. Neesmu to izmantojusi.
//     // hmm... man vajadzēja gan iedomāties par to, ka jāizmanto kāda Array method, duuh...
//     trainingHours.every((arg) => !isNaN(Number(arg)))
//   ) {
//     return {
//       target: Number(target),
//       // every atgrieza boolean true, map() šobrīd atgriež vērtības zem Number konstruktora
//       hours: trainingHours.map((arg) => Number(arg)),
//     };
//   } else {
//     // throw es pagaidām FSO esmu izlaidusi, bet tiktāl acīmredzams, kas te notiek. Kopēts no FSO
//     throw new Error("Provided values were not numbers!");
//   }
// };

// // es nemāku process.argv. man jāpamācās. ja mācētu, varētu iedomāties par metožu izmantošanu
// if (process.argv.includes("exerciseCalculator"))
//   // try arī es pagaidām esmu izlaidusi
//   try {
//     // destrukturējam zagto parsēšanas metodi, lai izgūtu divus atsevišķus mainīgos
//     // ... un vēl te args pārtop process.argv
//     const { target, hours } = parseHours(process.argv);
//     console.log(calculateExercises(target, hours));
//   } catch (e) {
//     console.log("Error, something bad happened");
//   }

// // ja šo neatkārto, tad konsole neko neuzrāda
// const { target, hours } = parseHours(process.argv);
// console.log(calculateExercises(target, hours));
