import React from 'react';
import { maruipol_bold, inter } from "../../../fonts/fonts";

interface RectangleProps {
  emoji: string,
  text: string
}

const RectangleWithEmoji = ({ emoji, text }: RectangleProps) => {
  return (
    <div className="flex items-center justify-center bg-white rounded-lg p-5 w-72 h-24 shadow-xl lg:hover:bg-best-blue lg:hover:text-white lg:duration-500">
      <span className="text-4xl">{emoji}</span>
      <span className={`font-semibold text-sm mb-[42px] mt-[42px] pl-[24px]`}>{text}</span>
    </div>
  );
};

export default RectangleWithEmoji;
