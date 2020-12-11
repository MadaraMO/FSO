import express = require("express");
import { calculateBmi } from "./bmiCalculator";

const app = express();
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

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
