import React from "react";

const Input = ({ label, placeholder, type, onChange, icon, name }) => {
  return (
    <div className="flex w-full flex-col gap-3 justify-start items-start">
      <label className="text-center text-white font-publicSans font-semibold text-base">
        {label}
      </label>
      <div className="relative w-full">
        <input
          name={name}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          className="w-full appearance-none backdrop-blur-xl h-14 px-3 py-2 rounded-xl outline-none bg-box placeholder:font-publicSans placeholder:text-sm font-amiri text-base text-white placeholder:text-text-light "
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 -translate-x-1/2 text-white text-lg">
          {icon}
        </span>
      </div>
    </div>
  );
};

export default Input;
