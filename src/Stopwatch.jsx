import React,{useState,useEffect,useRef} from "react"
function Stopwatch (){

    const [isrunning,setisrunning]= useState(false);
    const [elapsedtime,setelapsedtime]= useState(0);
    const intervalIDref= useRef(null);
    const starttimeref= useRef(0);

    useEffect(()=>{
        if(isrunning){

            intervalIDref.current=setInterval(() => {
                setelapsedtime(Date.now()- starttimeref.current)
                
            }, 10);
        }
        return ()=>{
            clearInterval(intervalIDref.current);
        }

    },[isrunning]);


  function start(){

    setisrunning(true);
    starttimeref.current= Date.now()-elapsedtime;
    

    }
  function stop(){

    setisrunning(false);
    

  }

  function reset(){
    setelapsedtime(0);
    setisrunning(false);

  }

  function formattime() {
  let hours = Math.floor(elapsedtime / (1000 * 60 * 60));
  let minutes = Math.floor((elapsedtime / (1000 * 60)) % 60);
  let seconds = Math.floor((elapsedtime / 1000) % 60);
  let milliseconds = Math.floor((elapsedtime % 1000) / 10);

  
  let h = hours.toString().padStart(2, "0");
  let m = minutes.toString().padStart(2, "0");
  let s = seconds.toString().padStart(2, "0");
  let ms = milliseconds.toString().padStart(2, "0");

  return `${m}:${s}.${ms}`;
}

    return (<div className="stopwatch">
        <h1 className="ll">stopwatch</h1>
        <div className="display">{formattime()}</div>
        <div className="controls">
            <button className="start" onClick={start}>start</button>
             <button className="stop" onClick={stop}>stop</button>
              <button className="reset" onClick={reset}>reset</button>


        </div>
        

    
    </div>);


}

export default Stopwatch
