import react ,{ useCallback, useEffect, useState } from "react";


function Clock(){

    const[time,settime]= useState(new Date());
     useEffect(()=>{
        const intervalID= setInterval(()=>{
            settime(new Date());
        },1000);

        return ()=>{
            clearInterval(intervalID);
        }

     },[]);

     function formattime(){
        let hours=time.getHours();
    
        const minutes= time.getMinutes();

        const seconds = time.getSeconds();
        const meridiem = hours>=12 ? "pm": "am";

        hours = hours % 12 || 12;
        return `${padzero(hours)}:${padzero(minutes)}:${padzero(seconds)} ${meridiem}`;
     }

     function padzero(number){
        return( number<10 ? "0":"")+number;



     }


    return (<div className="clockcontainer">
        <h2>DIGITAL CLASS</h2>
        <div className="clock">
            <span>{formattime()}</span>
        </div>
        


    </div>);

}

export default Clock