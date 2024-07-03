import { useEffect,useState } from "react"
import {} from "../utils/Constants"
import useSentenceData from "../utils/useSentenceData"
import Countdown from "./Countdown"
export default Body = () => {
    const [reload, setReload] = useState(false);
    const sentence = useSentenceData(reload);
    const [charMap, setCharMap] = useState({});
    const [timeforTest, setTimeforTest] = useState(15);
    const [showTimeHeader, setShowTimeHeader] = useState(true);
    console.log(timeforTest)
    const [charIndex, setCharIndex] = useState(0);
   
    const handleKeyPress = (event) => {
        if (event.key === ' ') {
            event.preventDefault();
        }
        if(event.key === sentence[charIndex]) {
            setCharMap((charMap) => ({ ...charMap, [charIndex]: true }));
        }else{
            setCharMap((charMap) => ({ ...charMap, [charIndex]: false }));
        }
        setCharIndex(charIndex + 1);
        setShowTimeHeader(false);
    }
    useEffect(() => {
        window.addEventListener("keypress", handleKeyPress);
        return () => {
            window.removeEventListener("keypress", handleKeyPress);
        };
    }, [sentence,charIndex]);
    return (
        (sentence=="")?(<div className="flex items-center justify-center min-h-screen">
            <div className="w-8 h-8 border-4  rounded-full animate-spin border-[#e2b712]"></div>
          </div>):
        (<>
        {showTimeHeader?<div className="flex justify-center mt-4">
            <div className="bg-customGrey rounded-lg px-2 items-center justify-between flex space-x-4 text-sm text-customGrey-light w-[30%] h-9">
                <div className="flex">
                    <span className="px-2">
                    <svg className="w-[17px] h-[17px] fill-[#e2b712]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M176 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h16V98.4C92.3 113.8 16 200 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-41.8-12.3-80.7-33.5-113.2l24.1-24.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L355.7 143c-28.1-23-62.2-38.8-99.7-44.6V64h16c17.7 0 32-14.3 32-32s-14.3-32-32-32H224 176zm72 192V320c0 13.3-10.7 24-24 24s-24-10.7-24-24V192c0-13.3 10.7-24 24-24s24 10.7 24 24z"></path>
                    </svg>
                    </span>
                <span className="px-2  hover:text-white transition duration-300 cursor-pointer">Time</span>
                </div>
                <span>|</span>
                <span 
                    className={`px-2 ${timeforTest === 15 ? 'text-[#e2b712]' : ''} hover:text-white transition duration-300 cursor-pointer`} 
                    onClick={() => setTimeforTest(15)}
                >
                    15
                </span>

                <span 
                    className={`px-2 ${timeforTest === 30 ? 'text-[#e2b712]' : ''} hover:text-white transition duration-300 cursor-pointer`} 
                    onClick={() => setTimeforTest(30)}
                >
                    30
                </span>
                <span 
                    className={`px-2 ${timeforTest === 60 ? 'text-[#e2b712]' : ''} hover:text-white transition duration-300 cursor-pointer`} 
                    onClick={() => setTimeforTest(60)}
                >
                    60
                </span>

            </div>
        </div>:<div className="w-[30%] h-9"></div>}
        
        <div className="flex items-center justify-center min-h-screen  p-4">
            <div className="w-full max-w-7xl">
                <div className="flex flex-col font-mono">
                    <Countdown time={timeforTest} showTimeHeader={showTimeHeader}/>
                    <div>
                        {sentence && sentence.split("").map((char, index) => {
                            return (
                                <>
                                    <span className="absolute text-[#e2b712] text-1xl md:text-2xl lg:text-3xl  animate-blink -ml-2">
                                        {((charIndex === index) ? '|' : '')}
                                    </span>
                                    <span key={index} className={`text-1xl md:text-2xl lg:text-3xl text-left  ${(typeof charMap[index] === 'undefined') ? 'text-customGrey-light' : ((charMap[index] == false) ? 'text-[#c94653]' : 'text-[#d0cfc4]-500')}`}>
                                        {(sentence[index] || '')}
                                    </span>
                                </>
                            )
                        })}
                    </div>
                    <div className="relative group">
                            <svg onClick={() => (setReload(!reload))} className="w-[17px] h-[17px] my-[19px] mx-auto fill-[#8e8e8e]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H464c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z"></path>
                            </svg>
                            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded-lg py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            Reset sentence
                            </div>
                </div>
                </div>
            </div>
        </div>

        </>
        )
        
      );
}