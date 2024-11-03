function handleSubmit(event){
    event.preventDefault();
    console.log("Form Submitted");
    
    
}

export default function FormSample() {
    return(
        <>
            <form>
                <input placeholder="write someting"></input>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}