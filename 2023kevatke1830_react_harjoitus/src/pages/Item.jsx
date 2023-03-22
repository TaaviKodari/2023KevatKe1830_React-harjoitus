import React from "react";

export const Item =(props) =>{
    return(
        <div>
            <img src={props.img} />
            <p>Title: {props.title}</p>
            <p>Description:{props.description} </p>
        </div>
    );
}