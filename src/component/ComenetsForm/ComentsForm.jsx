import { useState } from "react"

export default function ComentsForm() {
    let [formdata ,setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5
    })



    let handleSubmit = (e) => {
        e.preventDefault();

        // console.log(formdata);        

        setFormData({
            username: "",
            remarks: "",
            rating: 5
        })
    }

    let handleChange = (e) =>{
        setFormData((currData) => {
            return {...currData , [e.target.name] : e.target.value}
        })
    }

    return (
        <>
            <h1>Give a comment !</h1>
            
            <form action="" onSubmit={handleSubmit}>

                <input type="text" 
                placeholder="usename"
                value={formdata.usename}
                name="username"
                id="username"
                onChange={handleChange}
                />

                <br /><br /><br />

                <textarea
                 value={formdata.remarks}
                 name="remarks"
                 id="remarks"
                 onChange={handleChange}
                 >Remarks</textarea>

                 <br /><br /><br />

                <input type="number" 
                placeholder="rating"
                min={1}
                max={5}
                value={formdata.rating}
                name="rating"
                id="rating"
                onChange={handleChange}
                />

                <br /><br /><br />

                <button>Add comment</button>
            </form>
        </>
    )
}