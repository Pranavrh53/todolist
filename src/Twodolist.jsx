
import React, {useState} from "react"

function todolist(){

    const[tasks,settasks]= useState(["eat food","study","shower","walk the dog"]);
    const[newtask,setnewtask]= useState("");

    function handleimputchange(event){
        setnewtask(event.target.value);


    }

    function addtask(){
        if(newtask.trim()!==""){
        settasks(tasks=>[...tasks,newtask]);

        setnewtask("");
        

    }
}
    function deletetask(index){

        const updatedtask= tasks.filter((_,i)=> i!==index);
        settasks(updatedtask);

    }
    function movetaskup(index){

        if(index>0){
            const updatedtask=[...tasks];
            [updatedtask[index],updatedtask[index-1]]=[updatedtask[index-1],updatedtask[index]];

            settasks(updatedtask);
        }

    }
    function movetaskdown(index){

        if(index<tasks.length-1 ){

        const updatedtask=[...tasks];
        [updatedtask[index],updatedtask[index+1]]=[updatedtask[index+ 1],updatedtask[index]];
        settasks(updatedtask)
        }

    }


    return (<div className="todolist">
        <h1>TO DO LIST</h1>
        <div>
            <input type="text" placeholder="enter a task..." value={newtask} onChange={handleimputchange}/>
            <button className="addbutton" onClick={addtask}>add</button>
        </div>
        <ol>
            {tasks.map((task,index)=>
            <li key={index}>
                <span className="text">{task}
                </span>
                <button className="deletebutton" onClick={()=>deletetask(index)}>delete</button>
                <button className="movebutton" onClick={()=>movetaskup(index)}>👆</button>
                <button className="movebutton" onClick={()=>movetaskdown(index)}>👇</button>
                </li>
            )}
        </ol>
    </div>
    );


}
export default todolist