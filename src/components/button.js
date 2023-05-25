import { useState } from "react";

function Button({naam,smash}){

    const [num,setnum]=useState(0);

    function func(){
        // 
        setnum(num+1);

        setnum(num+1);
        setnum(num+1);
        setnum(num+1);
        smash();
        // return alert(`Hello ${naam}`);
    }
    return<>
    <button  onClick={func}>{num}</button>
    </>
}

export default Button;