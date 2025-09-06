import React from "react";

const Button = ({ onClick, btnName }) => {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center font-publicSans cursor-pointer text-text-dark text-center font-medium text-base bg-btn-gradient w-full rounded-2xl border border-solid mt-3 px-6 py-4 border-white"
    >
      {btnName}
    </button>
  );
};

export default Button;
