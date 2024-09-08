import Image from 'next/image';
import React from 'react';

interface SquareProps {
  emojiUri: string, bgColor: string, text: string, textColor: string
}

const ColorfulSquare = ({ emojiUri, bgColor, text, textColor = "" }: SquareProps) => {
  return (
    <div className={`lg:w-[272px] lg:h-[272px] h-[160px] w-[160px]  ${bgColor} rounded-3xl flex flex-col justify-center items-center relative`}>
      <div className='lg:h-[92px] lg:w-[92px] h-[60px] w-[60px] flex justify-center items-center lg:pb-16 pb-12'>
        <Image src={emojiUri} width={92} height={92} alt='emoji'  />
      </div>
      <div className={`absolute bottom-2 text-center text-base ${textColor} pb-[28px] lg:text-2xl lg:pb-10 pr-25 pl-25 pt-48 lg:font-inter font-inter font-bold lg:font-bold`}>{text}</div>
    </div>
  );
};

export default ColorfulSquare;
