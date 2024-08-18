import React from 'react';

interface SquareProps{
    emoji:string, color:string, text:string, test:string 
}

const ColorfulSquare = ({ emoji, color, text, test = ""}: SquareProps) => {
  return (
    <div className={`lg:w-[272px] lg:h-[272px] h-[160px] w-[160px]  ${color} rounded-3xl flex flex-col justify-center items-center relative`}>
      <div className="lg:text-8xl text-6xl pb-32 pt-14">{emoji}</div>
    <div className={`absolute bottom-2 text-center text-base ${test} pb-[28px] lg:text-2xl lg:pb-10 pr-25 pl-25 pt-48 lg:font-inter font-inter font-bold lg:font-bold` }>{text}</div>
    </div>
  );
};

export default ColorfulSquare;
