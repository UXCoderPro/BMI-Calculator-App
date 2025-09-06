import { useLocation, useNavigate } from "react-router-dom";
import { calculateBMI } from "../Utils/CalculateBMI";
import { motion } from "framer-motion";
import human from "../assets/file/human.svg";
import Value from "../Components/Value";
import Box from "../Components/Box";

export default function ResultPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { name, height, weight, dob } = state || {};
  const { bmi, age, category, description, subHeader } = calculateBMI(
    weight,
    height,
    dob
  );

  // Normalize BMI for progress bar (0–40 scale)
  const bmiValue = Math.min(bmi, 40);

  return (
    <motion.div
      className="h-screen w-full flex flex-col justify-start gap-10 items-start mt-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-btn-gradient flex flex-col gap-6 w-full px-6  py-7 rounded-2xl">
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-col gap-4 items-start justify-start ">
            <h1 className="font-amiri text-text-dark font-semibold text-3xl">
              {name}
            </h1>
            <div className="flex flex-col justify-start items-start gap-2">
              <h2 className="font-amiri text-primary text-4xl font-bold">
                {bmi}
              </h2>
              <p className="font-publicSans text-text-dark text-base font-medium">
                Your BMI Value
              </p>
            </div>
          </div>
          <img src={human} alt="Abdul Aziz" className="pr-5 object-cover" />
        </div>
        <div className="flex justify-between items-start w-full py-2">
          <Value value={age} que="Age (Yrs)" />
          <Value value={height} que="Height" />
          <Value value={weight} que="Weight" />
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-box-gradient backdrop-blur-lg px-4 py-5 rounded-2xl border border-solid border-white">
        <p className="font-publicSans text-white text-lg font-semibold">
          Your BMI Progress
        </p>
        <div className="w-full mt-3 bg-white h-4 rounded-full overflow-hidden">
          <motion.div
            className="h-4 bg-highlight-gradient rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(bmiValue / 40) * 100}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
        <div className="flex justify-between text-sm mt-1 opacity-80">
          <span className="font-amiri text-text text-base font-medium">0</span>
          <span className="font-amiri text-text text-base font-medium">20</span>
          <span className="font-amiri text-text text-base font-medium">
            40+
          </span>
        </div>
      </div>
      <Box
        Header={category}
        desc={description}
        subHeader={subHeader}
        onClick={() => navigate("/data")}
        btnName="Try Another"
      />
    </motion.div>
  );
}
