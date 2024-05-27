import React, {useState, useEffect} from "react";

function DigitalClockApp (){

  const [time, setTime] = useState(new Date());

  useEffect (() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    console.log('setInterval is added');

    return () => {
      clearInterval(intervalId);
      console.log('setInterval is removed');
    }
  },[]);

  function formatTime (){
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridien = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridien}`;
  }

  function padZero (number){
    return (number < 10 ? '0' : '') + number;
  }
  
 
  return(<div className="clock-container">
          <div className="clock">
            <span>{formatTime()}</span>
          </div>
        </div>);

}
export default DigitalClockApp