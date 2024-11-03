import { useState } from "react"
// import "./Lottery.css"
import { getTicktNumber,sum } from "./helper";
import Ticket from "./Ticket";


export default function Lottery({n=3 , winningSum=15}) {

    let [ ticket , setTicket] = useState(getTicktNumber(n));

    let isWinning = sum(ticket) === winningSum;

    let buyTicket = () => {
        setTicket(getTicktNumber(n));
    }

    return (
        <div>
            <h1>Lottery Game</h1>
            <div className="ticket">
                <Ticket ticket={ticket}/>
            </div>
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulations , You won!!"}</h3>
        </div>
    )    
}