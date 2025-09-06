import { differenceInYears } from "date-fns";

export const calculateBMI = (weight, height, dob) => {
  const age = differenceInYears(new Date(), new Date(dob));
  const heightInMeters = height / 100; // convert cm to m
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

  let category = "";
  let description = "";
  let subHeader = "";

  if (bmi < 18.5) {
    category = "Underweight";
    subHeader = "Time to Build Strength 💪";
    description =
      "Your BMI is below the healthy range. Focus on a balanced diet with enough calories, proteins, and rest to gain strength.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal";
    subHeader = "Keep It Up 🎉";
    description =
      "Great job! Your BMI is within the healthy range. Maintain your balance of diet and exercise.";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
    subHeader = "Small Changes, Big Impact ⚡";
    description =
      "Your BMI is above the healthy range. Consider regular exercise and a balanced diet to reduce weight.";
  } else {
    category = "Obese";
    subHeader = "Let&apos;s Take Control 🔥";
    description =
      "Your BMI is significantly above the healthy range. It's recommended to consult a healthcare provider and adopt an active lifestyle.";
  }

  return { bmi, age, category, description, subHeader };
};
