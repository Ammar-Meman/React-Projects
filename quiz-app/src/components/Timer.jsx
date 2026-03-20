import React, { useState, useEffect } from 'react'

const Timer = () => {
  
  const [leftTime,setLeftTime] = useState(5);
  // const [displayTime,setDisplayTime] = useState("")
  console.log(leftTime)

  useEffect(()=>{

    // let formatedTime = (`${(Math.floor(leftTime/60)).toString().padStart(2,0)} : ${(leftTime%60).toString().padStart(2,0)}`);
    // setDisplayTime(formatedTime);

    let intervalId = setInterval(() => {
//       setLeftTime(leftTime - 1) takes a snapshot of leftTime = 5. This snapshot is used forever by setInterval. But if [leftTime] is added, useEffect runs again every time leftTime changes so a new snapshot is created each time, and it works correctly.
      setLeftTime(prev => {
        if(prev <= 0){
          clearInterval(intervalId);
          return 0;
        }
        return prev - 1;
      })
    }, 1000);
  },[])

  let displayTime = `${(Math.floor(leftTime/60))   
    .toString()
    .padStart(2,0)} : ${(leftTime%60)
      .toString()
      .padStart(2,0)
    }`              
    //  React doesn’t update the UI step-by-step — it re-runs the entire component whenever state changes.
    //Values like displayTime are recalculated on every render, so the UI always reflects the latest state.
    

  return (
    <div>
          <div>Timer Left :  {displayTime}</div>

    </div>
  )
}

export default Timer