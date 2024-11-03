import "./index.css";

export default function Product({title , price , features = []}) {
    const list = features.map((features) => <li>{features}</li>)

    let style = {backgroundColor: price > 15000 ? "lightblue" : "" , color: price > 15000 ? "black" : ""}

    let isDiscount = price > 15000 ? <p>Discount 5%</p> : null
    
        return(
        <div className="Product" style={style}>
        <h3>Product - {title}</h3>
        <h5>Price - {price}</h5>
         {isDiscount}
        </div>
    )
    
}