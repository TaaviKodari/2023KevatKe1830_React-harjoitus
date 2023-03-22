import React from "react";
import { useState } from "react";

export const List =()=>{
    const [content,setContent] = useState([]);
    return(
        <div>
            <div>
                <form>
                    <input type="text" required/>
                    <input type="submit"value="Submit" />
                </form>
            </div>
        </div>
    );
}