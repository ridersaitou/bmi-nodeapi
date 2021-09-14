import express from "express";
import bodyParser from "body-parser";

const app = express();
const HOST = "0.0.0.0";
const PORT = 5000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  const height = req.query.height;
  const weight = req.query.weight;
  const heightM = height / 100;
  const bmi = weight / Math.pow(heightM, 2);
  var label;

  if (bmi <= 15) {
    label = "Very Severely Underweight";
  } else if (bmi > 15 && bmi <= 16) {
    label = "Severely Underweight";
  } else if (bmi > 16 && bmi <= 18.5) {
    label = "Underweight";
  } else if (bmi > 18.5 && bmi <= 25) {
    label = "Healthy";
  } else if (bmi > 25 && bmi <= 30) {
    label = "Overweight";
  } else if (bmi > 30 && bmi <= 35) {
    label = "Obese Class 1";
  } else if (bmi > 35 && bmi <= 40) {
    label = "Obese Class 2";
  } else {
    label = "Obese Class 3";
  }
  //console.log("[TEST]");
  res.send({
    bmi: bmi,
    label: label,
    //height: height,
    //weight: weight,
  });
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://${HOST}:${PORT}`)
);
