import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import asset from "../assets/file/onBoard.svg";
import Box from "../Components/Box";

const content = [
  {
    id: 1,
    Header: "Your Health Score Awaits!",
    subHead:
      "Check your BMI, unlock your category, and see how close you are to your health goals. Let’s make fitness fun!",
    btnName: "Start Calculation",
  },
];

const Intro = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/data");
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
      className="w-full flex flex-col justify-between h-full items-center mt-7 mb-32 "
    >
      <img src={asset} alt="onBoarding" className="w-48 h-48 object-cover" />
      <div className="w-11/12 h-auto">
        {content.map((items) => (
          <div key={items.id}>
            <Box
              Header={items.Header}
              desc={items.subHead}
              onClick={handleClick}
              btnName={items.btnName}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Intro;
