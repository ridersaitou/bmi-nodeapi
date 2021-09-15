import express from "express";

const app = express();
const HOST = "localhost";
const PORT = 5000;

app.get("/", (req, res) => {
  const height = req.query.height;
  const weight = req.query.weight;
  const heightM = height / 100;
  const bmi = weight / Math.pow(heightM, 2);
  var label;

  if (bmi <= 18.5) {
    label = "Underweight";
  } else if (bmi > 18.5 && bmi <= 25) {
    label = "Healthy";
  } else if (bmi > 25 && bmi <= 30) {
    label = "Overweight";
  } else {
    label = "Obese";
  }
  //console.log("[TEST]");
  //res.writeHead(200, { "Content-Type": "application/json" });
  //res.end("Hello");
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
