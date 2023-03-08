import React from "react";
import {useState,useEffect} from "react";

export const Counters = ()=>{
    const[count, setCount] = useState(0);

    useEffect(()=>{
        setTimeout(function(){
            setCount(count +1);
        },1000);
    },[]);

    useEffect(()=>{
        
    });

    return(
        <div>
            <h1>I'have rendered {count}time!</h1>
            <h1>I'have rendered {}times!</h1>
        </div>
    );
}