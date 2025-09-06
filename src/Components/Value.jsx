import React from "react";

const Value = ({ value, que }) => {
  return (
    <div className="flex w-1/2 border-r border-solid border-r-white flex-col gap-2 justify-center items-center ">
      <h1 className="font-publicSans text-text-dark text-xl font-semibold text-center">
        {value}
      </h1>
      <p className="font-publicSans text-text-dark text-base font-medium text-center">
        {que}
      </p>
    </div>
  );
};

export default Value;
