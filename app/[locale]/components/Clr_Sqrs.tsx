import React from 'react';

interface SquareProps{
    emoji:string, color:string, text:string, test:string
}

const ColorfulSquare = ({ emoji, color, text, test }: SquareProps) => {
  return (
    <div className={`lg:w-[272px] lg:h-[272px] h-[160px] w-[160px]  ${color} rounded-3xl flex flex-col justify-center items-center relative`}>
      <div className="text-8xl pb-32 pt-14">{emoji}</div>
    <div className={`absolute bottom-2 text-center text-lg ${test} text-2xl pb-10 pr-25 pl-25 pt-48 lg:font-inter sm:font-inter sm:font-bold lg:font-bold` }>{text}</div>
    </div>
  );
};

export default ColorfulSquare;
