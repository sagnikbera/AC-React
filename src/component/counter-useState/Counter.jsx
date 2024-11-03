import { useState } from "react"

export default function Counter() {
   let [count , setCount] = useState(0);

   let incCount = () =>{
        setCount(count+1);
   }

   let decCount = () =>{
    setCount(count - 1);
   }
     
    
    return(
        <>
            <div>Count = {count}</div>
            <button onClick={incCount}>Inc Count</button>
            <button onClick={decCount}>Dec Count</button>
        </>
    )
}