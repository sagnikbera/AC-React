import { useState } from "react"

export default function LudoBoard() {

    let[ move , setmove] = useState({blue:0 , yellow:0 , green:0 , red:0})

    let [arr, setArr] = useState(["No moves yet!"])

    let updateBlue = () =>{
        setmove((prevMoves) => {
            return {...prevMoves , blue: prevMoves.blue+1}
        })

        setArr([...arr , "blue moves"]);
    }
    let updateYellow = () =>{
        //doesnot work
        //we have to use ...=> sprade oparator
        move.yellow += 1;
        setmove(move);
    }
    let updateGreen = () =>{
        move.green += 1;
        setmove({...move});
    }
    let updateRed = () =>{
        setmove({...move , red:move.red+1})
    }

    return(
        <>  
            <p>Game begins!</p>
            <p>{arr}</p>
            <br />
            <div className="board">
                <p>Blue Moves = {move.blue}</p>
                <button onClick={updateBlue} style={{backgroundColor:"blue"}}>+1</button>
                <p>Yellow Moves = {move.yellow}</p>
                <button onClick={updateYellow} style={{backgroundColor:"yellow" , color:"black"}}>+1</button>
                <p>Green Moves = {move.green}</p>
                <button onClick={updateGreen} style={{backgroundColor:"green"}}>+1</button>
                <p>Red Moves = {move.red}</p>
                <button onClick={updateRed} style={{backgroundColor:"red"}}>+1</button>
            </div>
        </>
    )
}