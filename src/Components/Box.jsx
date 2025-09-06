import React from "react";
import Button from "./Button";

const Box = ({ Header, subHeader, desc, btnName, onClick, key }) => {
  return (
    <div className="w-full p-7 bg-box-gradient gap-4 border backdrop-blur-xl border-solid border-white rounded-3xl flex flex-col justify-start items-start">
      <h1 className="font-amiri text-3xl text-white font-bold">{Header}</h1>
      <h2 className="font-amiri text-white font-normal text-2xl">
        {subHeader}
      </h2>
      <p className="font-publicSans text-text-light font-medium text-base">
        {desc}
      </p>
      <Button onClick={onClick} btnName={btnName} />
    </div>
  );
};

export default Box;
