import FormSample from "./FormSample";

function printHello(event){
    console.log("Hello");
    console.log(event);
}

export default function Button(){
    return (
        <>
        <button onClick={printHello }>Click Me</button>
        <FormSample/>
        </>
    )
}