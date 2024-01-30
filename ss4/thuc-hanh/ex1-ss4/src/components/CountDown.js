import { useEffect, useState } from "react"

export function CountDown() {
    const [count,setCount] = useState("15");
  
    useEffect(() => {
     let idInter =   setInterval(() => {
        console.log("setInterVal");
            setCount(count => count -1);
        },1000);

        return() => {
            console.log("clean");
            clearInterval(idInter)
         } 
    },[])
 
    return(
        <div>
            <h1>Number countdow : {count} !!!</h1>
        </div>
    )
}