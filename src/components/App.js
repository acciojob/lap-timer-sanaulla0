
import React,{useEffect, useState} from "react";
import './../styles/App.css';

const App = () => {
   const [time , setTime] = useState(0);
   const [start , setStart] = useState(false);
    const [stop, setStop] = useState(true);
   const [lap , setLap] = useState([]);
  
  useEffect(()=>{
       let interval;
    if (start) {
       interval = setInterval(update , 100);
    }
    else
          clearInterval(interval);
        return ()=> clearInterval(interval);
  },[start])


  function update (){
    setTime( time => time + 1);
  }

  const begin = ()=>{
        setStart(true);
  }
  const handlelap = ()=>{
    
    const lapTime = {
         days : Math.floor(time / 60 / 60 / 24),
         hours : Math.floor((time / 60 / 60) %24),
         minutes : Math.floor((time / 60)%60),
         seconds : Math.floor(time %60),
    };
    
    setLap((prevLap) => [...prevLap, lapTime]);
    
  }
  const handlereset = ()=> {
                           
        setTime(0); 
            setStop(false); 
            setStart(false);   
            setLap('');                     
  }                                             

  const days = Math.floor(time/60/60/24);
  const hours = Math.floor((time/60/60) %24);
const minutes = Math.floor((time/60)%60);
const seconds = Math.floor(time%60);

  return (
    <div>
        {/* Do not remove the main div */}
      {days} : {hours} : {minutes} : {seconds}
      <br/>
   <button onClick={begin}>start</button>
   <button onClick={()=>setStart(s =>!s)}>stop</button>
   <button onClick={handlelap}>lap</button>
   <button onClick={handlereset}>reset</button>
   
   <div>
    {stop ? 
    lap.map((item,index)=>(
      <li key={index}>
         {item.days}:{item.hours}:{item.minutes}:{item.seconds}
               </li>
)) : ('')
  }
    
  
   </div>
   

    </div>
  )
}

export default App;
