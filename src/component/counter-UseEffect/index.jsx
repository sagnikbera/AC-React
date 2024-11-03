import { useEffect, useState } from "react"

export default function COunterUseEffect() {

    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);

    let incCountx = () => {
        setCountx (currCountx => currCountx + 1);
    }
    let incCounty = () => {
        setCounty (currCounty => currCounty + 1);
    }

    useEffect(() => {
        console.log("This is a side effect");
        
    } , [countx])

    return (
        <>
            <h3>Count = {countx}</h3>
            <button
            onClick={incCountx}>
                +1</button>
            <h3>Count = {county}</h3>
            <button
            onClick={incCounty}>
                +1</button>
        </>
    )
}