interface ButtonLearnMoreProps {
  text: string,
  href: string,
  btnColor: string,
  textColor: string
}

import Image from 'next/image'


const LinkLearnMore = ({ text: text, href: href, btnColor: btnColor, textColor: textColor }: ButtonLearnMoreProps) => {
  const colorClasses: { [key: string]: string } = {
    "best-blue": "#0F0BCB",
    "best-pink": "#EC9EFF",
    "best-orange": "#FFAF75",
    "best-green": "#77DD77",
    "best-yellow": "#FFF16C",
    "best-red": "#FF617E",
    "best-purple": "#EC9EFF"
  };
  const btnColorClass = colorClasses[btnColor];
  return (
    <a href={href}
      style={{ backgroundColor: btnColorClass }}
      className={`py-4 px-10 rounded-full min-lg:self-start group`}>
      <span className='inline-flex justify-center items-center'>
        <span className={`font-bold`}>{text}</span>
        <Image alt="arrow"
          src='../arrow.svg'
          className='ml-2 group-hover:-translate-y-1 transition-transform duration-300'
          width={24} height={24}></Image>
      </span>
    </a>

  )
}

export default LinkLearnMore