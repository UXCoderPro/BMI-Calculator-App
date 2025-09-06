import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="flex justify-center items-center absolute bottom-0 left-0 bg-highlight-gradient w-full h-7">
      <h1 className="text-white text-center font-publicSans text-sm ">
        © {year} Abdul Aziz V I. Designed to delight.
      </h1>
    </div>
  );
};

export default Footer;
