import Price from "./price"
import "./product.css"

export default function AmazonProduct({title , idx}) {

    let oldPrice = ["12,495" , "11,900" , "1,599" , "599"]
    let newPrice = ["8,999" , "9,199" , "899" , "278"]
    let description = ["8,00 DPI" , "Intutuve surface" , "Designed for iPad pro" , "2.4 GHz wireless"]

    return(
        <>
        <div className="Product">
            <h2>{title}</h2>
            <p>{description[idx]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
        </>
    )
}