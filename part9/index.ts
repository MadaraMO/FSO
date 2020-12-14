import express = require("express");
import { calculateBmi } from "./bmiCalculator";
import { calculateExercises } from "./exerciseCalculator";
// šis man ienāca automātiski
import { isArray } from "util";

const app = express();
app.use(express.json());

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const { height, weight } = req.query;

  const calculationHeight = Number(height);
  const calculationWeight = Number(weight);
  const evaluation = calculateBmi(calculationHeight, calculationWeight);

  if (!isNaN(calculationHeight) && !isNaN(calculationWeight)) {
    res.json({
      weight: weight,
      height: height,
      bmi: evaluation,
    });
  } else {
    res.json({
      error: "malformatted parameters",
    });
  }
});

app.post("/exercises", (req, res) => {
  // neesmu pārliecināta
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { daily_exercises, target }: any = req.body;

//   neizdevās pielietot
  //   const bodyDailyExercises = Array<number>(daily_exercises);

  const bodyTarget = Number(target);

  if (!daily_exercises || !target)
    return res.status(400).json({ error: "parameters missing" });
  if (isNaN(bodyTarget) || !isArray(daily_exercises))
    return res.status(400).json({ error: "malformatted parameters" });

  // šo gribētu glītāk
  daily_exercises.map((ex) => {
    if (isNaN(Number(ex)))
      res.status(400).json({ error: "malformatted parameters" });
  });

  return res.json(calculateExercises(daily_exercises, target));
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
