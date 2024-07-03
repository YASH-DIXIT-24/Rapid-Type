import { useEffect, useState } from "react";

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};

export default Countdown = ({time, showTimeHeader}) => {
  const [timeLeft, setTimeLeft] = useState(time);
  const [showCountDown, setShowCountDown] = useState(showTimeHeader);
  useEffect(() => {
    setTimeLeft(time);
    setShowCountDown(showTimeHeader);
  }, [time, showTimeHeader]);

  useEffect(() => {
    console.log("timeleft inside useEffect", timeLeft)
    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    (timeLeft>0 && !showCountDown) ? <span className=" text-[#e2b712] text-1md md:text-1xl lg:text-2xl">{formatTime(timeLeft)}</span> :
    <span></span>
  );
};
