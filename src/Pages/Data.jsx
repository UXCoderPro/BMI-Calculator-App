import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Input from "../Components/Input";
import { FaUser } from "react-icons/fa";
import Button from "../Components/Button";

const Data = () => {
  const [forms, setForms] = useState({
    name: "",
    gender: "Male",
    height: "",
    weight: "",
    dib: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Validation rules
    if (!forms.name || !forms.height || !forms.weight || !forms.dob) {
      return setError("⚠️ All fields are required!");
    }

    if (isNaN(forms.height) || isNaN(forms.weight)) {
      return setError("⚠️ Height and Weight must be numbers only!");
    }

    const today = new Date();
    const dob = new Date(forms.dob);
    if (dob > today) {
      return setError("⚠️ Date of Birth cannot be in the future!");
    }

    // Clear error if everything is fine
    setError(null);

    // Navigate with form data
    navigate("/result", { state: forms });
  };

  const handleGenderSelect = (gender) => {
    setForms({ ...forms, gender });
  };

  const [error, setError] = useState(null); // error message

  // Auto dismiss error popup after 5s
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.6 }}
      className="w-full flex flex-col justify-start items-start gap-6 relative  mt-7 mb-32 "
    >
      {error && (
        <div className="absolute top-0 w-full left-0 transform 2 bg-red-600 text-white px-6 py-3 rounded-xl shadow-lg z-50 animate-bounce">
          {error}
        </div>
      )}
      <Input
        name="name"
        label="Name"
        type="text"
        placeholder="Enter your Name"
        onChange={handleChange}
        icon={<FaUser />}
      />
      <div className="flex w-full flex-col gap-3 justify-start items-start">
        <label className="text-center text-white font-publicSans font-semibold text-base">
          Gender
        </label>
        <div className="w-3/4 h-14 px-2 py-1.5 bg-box-gradient border border-solid border-white rounded-xl flex overflow-hidden">
          <div
            onClick={() => handleGenderSelect("Male")}
            className={`w-1/2 cursor-pointer flex justify-center rounded-lg items-center font-amiri text-white font-medium text-sm ${
              forms.gender === "Male" ? "bg-primary-gradient" : "bg-transparent"
            }`}
          >
            Male
          </div>
          <div
            onClick={() => handleGenderSelect("Female")}
            className={`w-1/2 cursor-pointer flex justify-center rounded-lg items-center font-amiri text-white font-medium text-sm ${
              forms.gender === "Female"
                ? "bg-primary-gradient"
                : "bg-transparent"
            }`}
          >
            Female
          </div>
        </div>
      </div>
      <Input
        name="weight"
        label="Weight"
        type="number"
        placeholder="Enter your Weight (kg)"
        onChange={handleChange}
      />
      <Input
        name="height"
        label="Height"
        type="number"
        placeholder="Enter your Height (cm)"
        onChange={handleChange}
      />
      <Input
        name="dob"
        label="Date of Birth"
        type="date"
        placeholder="Pick your Birth Date"
        onChange={handleChange}
      />

      <Button onClick={handleSubmit} btnName="Calculate" />
    </motion.div>
  );
};

export default Data;
