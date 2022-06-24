"use strict";

// WORKOUT AND EXERCISE GENERATOR FOR A WEEK

function shuffle(exercises) {
  let m = exercises.length,
    temp,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    temp = exercises[m];
    exercises[m] = exercises[i];
    exercises[i] = temp;
  }
  return exercises;
}

const week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const PPL = [
  {
    name: "Push",
    exercises: [
      "Bench Press",
      "Incline Bench Press",
      "Decline Bench Press",
      "DB Bench Press",
      "DB Incline Bench Press",
      "DB Decline Bench Press",
      "Cable Bench Press",
      "Cable Incline Bench Press",
      "Cable Decline Bench Press",
      "Shoulder Press",
      "Shoulder Raises",
      "Shoulder Flyes",
    ],
  },
  {
    name: "Pull",
    exercises: [
      "UPINATED LAT PULLDOWN",
      "ACHINE HIGH ROW",
      "CABLE UPRIGHT ROW",
      "WIDE-GRIP PULL-UP",
      "ARBELL BENT OVER ROW",
      "AND PULL-APART",
      "MACHINE HIGH ROW",
    ],
  },
  {
    name: "Legs",
    exercises: [
      "DEADLIFT",
      "FRONT SQUAT",
      "SINGLE-LEG LEG EXTENSION",
      "SLIDING LEG CURL",
      "HANGING LEG RAISE",
      "STANDING CALF RAISE",
      "LEG PRESS",
      "BARBELL HIP THRUST",
      "BACK SQUAT",
      "BARBELL 45° HYPEREXTENSION",
    ],
  },
  {
    name: "Arms",
    exercises: [
      "CCENTRIC-ACCENTUATED HAMMER CURL",
      "Incline Bench Press",
      "Decline Bench Press",
      "DB Bench Press",
      "DB Incline Bench Press",
      "DB Decline Bench Press",
      "Cable Bench Press",
      "Cable Incline Bench Press",
      "Cable Decline Bench Press",
      "Shoulder Press",
      "Shoulder Raises",
      "Shoulder Flyes",
    ],
  },
  ,
];
let PPLDays = {};

// Create map from day of week to the PPL we want for that day
for (let i = 0; i < 7; i++) {
  // Define break day as null
  if (i % 5 == 4) {
    PPLDays[week[i]] = null;
    continue;
  }

  // Assign PPL to this day of week
  PPLDays[week[i]] = PPL[i % 5];
}
const typeOfSpilts = {
  PPL: ["Push", "Pull", "Legs", "Arms", "Break"], //break every 4th day
  UPLW: ["Upper, Lower"], // break every 3rd xd
};

for (let day = 0; day < 7; day++) {
  let dailyExercise = PPLDays[week[day]];
  if (dailyExercise === null) {
    console.log("Get some rest you gym rat!!!");
    continue;
  }
  console.log(`----${week[day]} it's ${dailyExercise.name}----`);
  shuffle(dailyExercise.exercises);
  for (let workout = 0; workout <= 6; workout++) {
    console.log(`${workout + 1}. ${dailyExercise.exercises[workout]}`);
  }
}
