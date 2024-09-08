import Image from 'next/image';
import React from 'react';
import { inter } from '../../../fonts/fonts';

interface SquareProps {
  emojiUri: string;
  bgColor: string;
  text: string;
  textColor: string;
}

const ColorfulSquare = ({ emojiUri, bgColor, text, textColor = '' }: SquareProps) => {
  return (
    <div
      className={`lg:w-[200px] lg:h-[200px] h-[140px] w-[140px] ${bgColor} rounded-2xl flex flex-col justify-center items-center p-4 shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      <div className='lg:h-[80px] lg:w-[80px] h-[56px] w-[56px] flex justify-center items-center mb-4'>
        <Image src={emojiUri} width={80} height={80} alt='emoji' />
      </div>

      <div
        style={{ fontFamily: inter.style.fontFamily, fontWeight: 'bold' }}
        className={`${inter.className} font-bold text-center ${textColor}  text-sm lg:text-lg`}
      >
        {text}
      </div>
    </div>
  );
};

export default ColorfulSquare;
