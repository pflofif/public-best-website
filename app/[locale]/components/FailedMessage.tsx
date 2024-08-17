import Image from "next/image"

interface Props {
    headerText: string,
    text: string
}

export default function FailedMessage({ headerText, text }: Props) {
    const formattedText = text.replace(/\n/g, '<br />');

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="relative p-6 border-2 border-gray-300 border-opacity-50 rounded-lg w-[70vw] max-w-4xl text-center shadow-sm bg-white">
                <p className="font-bold text-lg md:text-xl">{headerText}</p>
                <p dangerouslySetInnerHTML={{ __html: formattedText }} />

                <Image 
                    src="./strips.svg" 
                    alt="lines" 
                    height={48} 
                    width={56} 
                    className="absolute top-[-40px] left-[-40px] sm:top-[-50px] sm:left-[-50px] w-12 h-12 sm:w-14 sm:h-14" 
                />
                <Image 
                    src="./strips.svg" 
                    alt="lines" 
                    height={48} 
                    width={56} 
                    className="absolute bottom-[-40px] right-[-40px] sm:bottom-[-50px] sm:right-[-50px] rotate-180 w-12 h-12 sm:w-14 sm:h-14"
                />
            </div>
        </div>
    )
}
