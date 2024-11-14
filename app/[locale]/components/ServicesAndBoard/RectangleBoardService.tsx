import React from 'react';
import { maruipol_bold, inter } from '../../../fonts/fonts';
import Image from 'next/image';

interface RectangleProps {
  emojiUri: string;
  text: string;
}

const RectangleWithEmoji = ({ emojiUri, text }: RectangleProps) => {
  return (
    <div className="flex items-center justify-start bg-white rounded-lg p-5 w-80 h-24 shadow-lg lg:hover:bg-best-ultra-light-blue lg:hover:text-white lg:duration-500">
      <div className='lg:h-[56px] lg:w-[56px] h-[56px] w-[56px] flex justify-center items-center'>
        <Image src={emojiUri} width={56} height={56} alt='emoji' />
      </div>
      <span
        style={{ fontFamily: inter.style.fontFamily, fontWeight: 'bold' }}
        className={`${inter.className} font-semibold text-sm mb-[42px] mt-[42px] pl-[18px]`}>
        {text}
      </span>
    </div>
  );
};

export default RectangleWithEmoji;
