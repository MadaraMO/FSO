interface ReturnedObj {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (
  exercises: number[],
  target: number
): ReturnedObj => {
  const activeDays = exercises.filter((hour: number) => hour > 0);

  const getAverage = (arr: number[]) =>
    arr.reduce((p, c) => p + c, 0) / arr.length;
  const average = getAverage(exercises);

  // tuple
  const calculateRating = (): [number, string] => {
    if (average >= target) {
      return [3, "Very good!"];
    }
    if (average < target) {
      return [2, "Not too bad"];
    }
    if (average < target) {
      return [1, "You can do better"];
    }
  };

  const rating = calculateRating();

  //vai šādi arī pieraksta? funkcija atgriež masīvu, izvēlos x indeksu
  // rating: calculateRating()[0],
  //   ratingDescription: calculateRating()[1],

  const result = {
    periodLength: exercises.length,
    trainingDays: activeDays.length,
    success: average >= target,
    rating: rating[0],
    ratingDescription: rating[1],
    target,
    average,
  };

  return result;
};

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
