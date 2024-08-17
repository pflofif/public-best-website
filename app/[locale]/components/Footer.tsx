import { maruipol_bold, inter } from "../fonts/fonts"

export default function Footer(){
    return (
        <div className={ `${inter.className} w-full min-h-80 bg-best-blue text-white flex flex-rows-4 justify-between items-center`}> 
            <div className="flex text-left p-10">
                <h1 className={`${maruipol_bold.className} text-4xl text-white max-w-sm text-3xl`}>МГО “Рада студентів технічних університетів” ЄДРПОУ</h1>
            </div>
            <div className="flex text-left">
                <h1 className="text-4xl text-white">Welcome!</h1>
            </div>
            <div className="flex text-left flex-row text-white text-lg gap-8">
                <div className="flex flex-col gap-5">
                    <h1 className="flex">Welcome!</h1>
                    <h1 className="flex">Welcome!</h1>
                    <h1 className="flex">Welcome!</h1>
                    <h1 className="flex">Welcome!</h1>
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="flex">Welcome!</h1>
                    <h1 className="flex">Welcome!</h1>
                    <h1 className="flex">Welcome!</h1>
                </div>
            </div>
            <div className="flex flex-col h-full justify-between">
                    <h1 className="flex">Welcome!</h1>
                    <h1 className="flex">Welcome!</h1>
                    <h1 className="flex">Welcome!</h1>
            </div>
        </div>
    )
}
