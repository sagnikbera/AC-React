import { useEffect, useState } from "react";

export default function Jocker() { 

    const url = "https://official-joke-api.appspot.com/random_joke";

    let [joke,setJoke] = useState({});

    const getJoke = async () => {
        let response = await fetch(url);
        let jsonResponse = await response.json();

        setJoke({
            setup: jsonResponse.setup,
            punchline: `PunchLine :  ${jsonResponse.punchline}`

        })
        console.log(jsonResponse);
        
    }

    useEffect( ()=> {
        let getFirstjoke = async() =>{
            let response = await fetch(url);
            let jsonResponse = await response.json();
    
            setJoke({
                setup: jsonResponse.setup,
                punchline: `PunchLine :  ${jsonResponse.punchline}`
    
            })
    }
        getFirstjoke();

    },[])

    

    return (
        <>
            <h3>Jocker !</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getJoke}>New joke</button>
        </>
    )
}