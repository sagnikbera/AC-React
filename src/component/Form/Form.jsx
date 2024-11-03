import { useState } from "react"

export default function Form() { 

    let [fullName, setFullName] = useState("");
    let [userName, setUserName] = useState("");

    let handleNameChange = (e) => {
        setFullName(e.target.value);
        
    }

    let handleUserNameChange = (e) => {
        setUserName(e.target.value);
    }

    return (
        <>
            <form action="">
                <label htmlFor="fullname">Full Name</label>
                &nbsp;
                &nbsp;
                &nbsp;
                <input type="text"
                placeholder="Enter your full Name" 
                value={fullName}
                onChange={handleNameChange}
                id="fullname"
                />
                <br />
                <br />
                <label htmlFor="username">User Name</label>
                &nbsp;
                &nbsp;
                &nbsp;
                <input type="text"
                placeholder="Enter UserName" 
                value={userName}
                onChange={handleUserNameChange}
                id="username"
                />

                <br />
                <br />
                <button>Submit</button>
            </form>
        </>
    )
}