import { useState } from "react"

export default function CommonForm() { 

    let[formData , setFormData] = useState({
        fullName:"",
        userName:"",
        password:"",
    })

    let handleChange = (e) => {
        let fieldName = e.target.name;
        let fieldValue = e.target.value;
        
        setFormData((currData) => {
            currData[fieldName] = fieldValue;
            return {...currData};
        })        
    }    

    let handleSubmit = (e) => {
        e.preventDefault(); 
web
        
        setFormData({
            fullName:"",
            userName:"",
            password:"",
        })
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="fullname">Full Name</label>
                &nbsp;
                &nbsp;
                &nbsp;
                <input type="text"
                placeholder="Enter your full Name" 
                value={formData.fullName}
                onChange={handleChange}
                id="fullname"
                name="fullName"
                />
                <br />
                <br />
                <label htmlFor="username">User Name</label>
                &nbsp;
                &nbsp;
                &nbsp;
                <input type="text"
                placeholder="Enter UserName" 
                value={formData.userName}
                onChange={handleChange}
                id="userName"
                name="userName"
                />
                <br />
                <br />
                <label htmlFor="password">Enter your password</label>
                &nbsp;
                &nbsp;
                &nbsp;
                <input type="password"
                placeholder="Enter Your Password" 
                value={formData.password}
                onChange={handleChange}
                id="password"
                name="password"
                />

                <br />
                <br />
                <button>Submit</button>
            </form>
        </>
    )
}