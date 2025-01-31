import React from 'react';

type ButtonProps = {
  label: string;
  iconURL: {
    src: string;
    height: number;
    width: number;
    blurWidth: number;
    blurHeight: number;
  };
};

const Button = ({ label, iconURL }: ButtonProps) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red">
      {label}
      <img
        src={iconURL.src}
        alt="arrow right icon"
        className=" ml-2 rounded-full w-5 h-5"
      ></img>
    </button>
  );
};

export default Button;
